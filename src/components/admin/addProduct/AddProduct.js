// import React, { useState } from 'react'
// import  { useSelector } from 'react-redux'
// import { selectIsLoading } from '../../../redux/features/product/productSlice';
// import Loader from "../../loader/Loader";
// import ProductForm from '../productForm/ProductForm';
// import './AddProduct.scss'

// const AddProduct = () => {
    
//     const [product,setProduct] = useState(initialState);
    
//     const isLoading = useSelector(selectIsLoading);
//     const { name, category, brand, price, quantity, color, regularPrice } =
//     product;
//   const { categories, brands } = useSelector((state) => state.category);


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const saveProduct = async (e) => {
//     e.preventDefault();
//     if (files.length < 1) {
//       return toast.info("Please add an image");
//     }


//   return (
//     <section>
//         <div className="container">
//             {isLoading && <Loader/>}
   
//             <h3 className='--mt'>Add New Product</h3>

//             <ProductForm saveProduct={saveProduct}
//             product={product}
//             handleInputChange={handleInputChange}/>
//         </div>
//     </section>
//   )
// }

// export default 


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";
import {
  createProduct,
  selectIsLoading,
} from "../../../redux/features/product/productSlice";
import ProductForm from "../productForm/ProductForm";

import "./AddProduct.scss";
import { toast } from "react-toastify";
import {
  getBrands,
  getCategories,
} from "../../../redux/features/categoryAndBrand/categoryAndBrandSlice";

const initialState = {
  name: "",
  category: "",
  brand: "",
  quantity: "",
  price: "",
  color: "",
  regularPrice: "",
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState([]);
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [description, setDescription] = useState("");

  const isLoading = useSelector(selectIsLoading);

  const { name, category, brand, price, quantity, color, regularPrice } =
    product;
  const { categories, brands } = useSelector((state) => state.category);
  const {message} = useSelector((state) => state.product)
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const generateKSKU = (category) => {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    return sku;
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    if (files.length < 1) {
      return toast.info("Please add an image");
    }

    const formData = {
      name: name,
      sku: generateKSKU(category),
      category: category,
      brand: brand,
      color: color,
      quantity: Number(quantity),
      regularPrice: regularPrice,
      price: price,
      description: description,
      image: files,
    };

    // console.log(formData);

    await dispatch(createProduct(formData));

    navigate("/admin/all-products");
  };
  const [filteredBrands, setFilteredBrands] = useState([]);
  function filterBrands(selectedCategoryName) {
    const newBrands = brands.filter(
      (brand) => brand.category === selectedCategoryName
    );
    setFilteredBrands(newBrands);
  }

  useEffect(() => {
    filterBrands(category);
    // console.log(filteredBrands);
  }, [category]);

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Add New Product</h3>

      <ProductForm
        files={files}
        setFiles={setFiles}
        product={product}
        productImage={productImage}
        imagePreview={imagePreview}
        setImagePreview={setImagePreview}
        description={description}
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        saveProduct={saveProduct}
        categories={categories}
        filteredBrands={filteredBrands}
        isEditing={false}
      />
    </div>
  );
};

export default AddProduct;

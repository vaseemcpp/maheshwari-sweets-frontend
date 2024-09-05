import React from "react";
import "./ProductCategory.scss";
import { useNavigate } from "react-router-dom";
import img1 from '../../assetss/post6.jpg'
import img2 from '../../assetss/post7.webp'
import img3 from '../../assetss/post8.png'
// https://i.ibb.co/fNkBYgr/c3.jpg
// https://i.ibb.co/5GVkd3m/c1.jpg
// https://i.ibb.co/nQKLjrW/c2.jpg

const categories = [
  {
    id: 1,
    title: "Mithai",
    image: img1,
  },
  {
    id: 2,
    title: "Namkeen",
    image: img2,
  },
  {
    id: 3,
    title: "Alpahar",
    image: img3,
  },
];

const Category = ({ title, image }) => {
  const navigate = useNavigate();
  return (
    <div className="category">
      <h3>{title}</h3>
      <img src={image} alt="img" />
      <button className="--btn" onClick={() => navigate("/shop")}>
        {"Shop Now >>>"}
      </button>
    </div>
  );
};

const ProductCategory = () => {
  return (
    <div className="categories">
      {categories.map((cat) => {
        return (
          <div key={cat.id}>
            <Category title={cat.title} image={cat.image} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductCategory;

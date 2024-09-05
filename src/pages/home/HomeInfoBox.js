import React from "react";
import {
  BsCartCheck,
  BsClockHistory,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import img1 from '../../assetss/1_small.png'
import img2 from '../../assetss/2_small.avif'
import img3 from '../../assetss/3_small.webp'
import styles from "./Features.module.css"
  // import 'bootstrap/dist/css/bootstrap.css';
const data = [
  {
    icon: <FaShippingFast size={30} color="#8cb4f5" />,
    heading: "Free Shipping",
    text: "We offer free shipping on special products",
  },
  {
    icon: <BsFillCreditCardFill size={30} color="#f7d272" />,
    heading: "Secure Payment",
    text: "Make secure payment for your product.",
  },
  {
    icon: <BsCartCheck size={30} color="#fa82ea" />,
    heading: "Hygiene",
    text: "We sell products from only tested and proven brands.",
  },
  {
    icon: <BsClockHistory size={30} color="#82fa9e" />,
    heading: "100% Vegetarian",
    text: "All items are 100% vegetarian.",
  },
];

const HomeInfoBox = () => {
  return (
    // <div className="infoboxes --mb2">
    //   {data.map((item,index) => {
    //     const {icon,heading,text} = item
    //     return(
    //         <div className="infobox" key={index}>
    //         <div className="icon">{icon}</div>
    //         <div className="text">
    //             <h4>
    //                 {heading}
    //             </h4>
    //             <p className="--text-sm">{text}</p>
    //         </div>
    //         </div>
    //     )
    //   })}
    // </div>

    <div className={styles.Features}>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3" >
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <img className={styles.img1} src={img1} alt={"img1"} />
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">High Quality</h3>
          <p>Welcome to a world where sweetness takes center stage, and every bite is a celebration of flavors and craftsmanship. Our collection of high-quality sweets is a testament to the artistry and dedication of our skilled confectioners.</p>
          
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <img className='img2' style={{width: "2em", height: "2em"}} src={img2} alt={"img2"} />
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">100% Vegetarian</h3>
          <p> Our collection of 100% vegetarian sweets is a testament to the belief that indulgence should be inclusive and mindful. Crafted with plant-based ingredients and a dedication to cruelty-free confectionery</p>
          
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <img className='img3'style={{width: "2em", height: "2em"}} src={img3} alt={"img3"} />
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Hygienic</h3>
          <p>Embark on a journey where the sweetness of our treats is only surpassed by the commitment to hygiene and well-being. Our collection of hygienic sweets is meticulously crafted to ensure the highest standards of cleanliness and purity. </p>
          
        </div>
      </div>
    </div>
        </div>
  )
}

export default HomeInfoBox
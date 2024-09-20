import React from "react";
import CarouselProducts from "./CarouselProducts";
import { Link } from "react-router-dom";


const CarouselMain = ({ products }) => {

  return (
    <>
      <CarouselProducts products={products} />
      <div style={{display:"flex", justifyContent:"center"}}>
        <button className="learn-more mt-5">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <Link className="button-text" to="/products/">
            Shop
          </Link>
        </button>
      </div>
    </>
  );
};

export default CarouselMain;

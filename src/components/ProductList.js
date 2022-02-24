import React from "react";
import './dev/static/product.css'
import MainImage from "./productComponents/MainImage";
import BrandList from "./productComponents/BrandList";
import TypeList from "./productComponents/TypeList";


const ProductList = () => {
    return (
        <div className="mainProductList">
            <MainImage/>
            <BrandList/>    
            <TypeList/>
        </div>
    )
}

export default ProductList;
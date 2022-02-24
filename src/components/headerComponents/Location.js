import React from "react";
import { FaSearch, FaMoon, FaSun, FaSearchLocation, FaLocationArrow, FaClosedCaptioning, FaDropbox, FaRegClosedCaptioning, FaHeart, FaUser, FaShopify, FaBasketballBall, FaShoppingBasket } from 'react-icons/fa';

const Location = () => {

    return (
        <div className="row">

            <div className="col-1" style={{ width: "30px", marginLeft: "30px" , }}>
                <FaHeart style={{ marginTop: "10px", fontSize: "20px", color: "red" }} />

            </div>
            <div style={{ width: "70px", marginTop: "7px", fontWeight: "bold" }}>
                Favourites
            </div>
            <div className="col-1" style={{ textAlign: "center", marginLeft:"40px" }}>
                <FaLocationArrow style={{ marginRight: "-40px" }} />
            </div>
            <div className="col-2" style={{
                fontSize: "11px",
                fontWeight: "lighter",
            }}>
                <p>Your Store For 6620 </p>
                <p style={{ marginTop: "-18px", fontSize: "15px", fontWeight: "bold" , textDecoration:"underline"}}>Konya City</p>
            </div>
            <div className="col-1" style={{marginLeft:"40px",  width: "20px"}}>
                <FaUser style={{marginTop:"10px"}}/> 
            </div>
            <div className="col-1" style={{fontSize: "13px",fontWeight:"lighter"}}>
                Login
                <p style={{fontWeight:"bold"}}>Register</p>
                
            </div>
            <div className="col-1" style={{fontSize: "27px", marginLeft: "70px", marginTop:"-4px"}}>
                <FaShoppingBasket/>
            </div>

        </div>
    )
}

export default Location;
import React from "react";
import "../dev/static/header.css"


const MainImage = () => {
    return(
        <div style={{textAlign:"center"}}>

            <img className="mainImageImg" src={require("../dev/static/main-image.png")} />
            
        </div>
    )
}
export default MainImage;


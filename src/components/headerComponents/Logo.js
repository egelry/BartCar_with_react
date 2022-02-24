import React from "react";
import "../dev/static/header.css"

const Logo = () => {

    return (

        <div className="mainLogo">
            <img className="mainLogoImg" src={require("../dev/static/logo.png")} />
        </div>
    )

}


export default Logo;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NavBarItem = ({ navBarItemsProp }) => {

    
    return (
        <div className="navBarItem" >
                {navBarItemsProp.title}
        </div>
    )
}
export default NavBarItem;
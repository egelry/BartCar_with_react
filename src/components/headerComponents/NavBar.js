import React from "react";
import '../dev/static/header.css'
import NavBarItem from "./NavBarItem";
import SearchBar from "./SearchBar";
import Location from "./Location";


const navBarItems =
    [
        {
            title: "Sales",
            key: 1,
        },

        {
            title: "Rents",
            key: 2,

        },
        {
            title: "Help",
            key: 3,
        },
        {
            title: "Profile",
            key: 4,

        },
    ]

const NavBar = () => {

    return (
        <div className="mainNavBar" >
            <div className="row" style={{
                backgroundColor: "rgb(246,246,246)",
                borderRadius: "10px",  padding: "5px"
            }} >
                {
                    navBarItems.map((item) => (
                        <div className="col-3" key={item.key}>

                            <NavBarItem navBarItemsProp={item} />
                        </div>

                    ))
                }
            </div>

            <SearchBar />
        </div>
    )

}

export default NavBar;
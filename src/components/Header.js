import React from "react";
import './dev/static/header.css'
import Logo from "./headerComponents/Logo";
import NavBar from "./headerComponents/NavBar";
import Location from "./headerComponents/Location";


const Header = () => {
    return (
        <div
            style={{
                paddingTop: "40px", paddingBottom: "20px",
                boxShadow: "2px 3px 4px rgba(0,0,0,0.2)"
            }} >

            <div className="container-fluid px-0" style={{
                marginLeft: "30px",
            }}>

                <div className="row" >

                    <div className="col-md-2" >

                        <Logo />


                    </div>


                    <div className="col-md-4" style={{ marginTop: "50px" }} >

                        <div className="container" >

                            <NavBar />

                        </div>

                    </div>
                    <div className="col-md-6" style={{ marginTop: "50px" }} >

                        <div className="container" >
                            <Location />
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )

}

export default Header;
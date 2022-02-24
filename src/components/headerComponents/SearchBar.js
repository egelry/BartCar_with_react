import React from "react";
import { FaSearch, FaMoon, FaSun } from 'react-icons/fa';

const SearchBar = () => {

    return (
        <div className="row" style={{ marginTop: "20px" }}>
            <input placeholder="Search Keyword Or Model" style={{
                border: "none", border: "solid 1px grey", borderRight: "none", borderLeft: "solid 1px grey",
                width: "455px", height: "35px",
                fontSize: "14px",
                fontFamily: "unset",
                borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"
            }}>
            </input>
            <button style={{
                width: "80px",
                height: "35px",
                borderTopRightRadius: "10px", borderBottomRightRadius: "10px",
                border: "none", border: "solid 1px grey",
                backgroundColor: "rgb(246,246,246)"
            }}>
                <FaSearch style={{ height: "15px", marginBottom: "3px" }} />
            </button>

        </div>


    )
}
export default SearchBar;
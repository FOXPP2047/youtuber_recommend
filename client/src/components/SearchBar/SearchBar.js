import React from "react";
import { Link } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className="mainContainer">
            <input type="text" name="" className="textField" placeholder="Search Your Youtuber"/>
            <Link to={"/youtuber"}>
                <button className="buttonField">
                    <i class="fas fa-search-plus"></i>
                </button>
            </Link>
        </div>
    );
}

export default SearchBar;
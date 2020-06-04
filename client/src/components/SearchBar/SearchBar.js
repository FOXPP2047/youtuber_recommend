import React from "react";

import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className="mainContainer">
            <input type="text" name="" className="textField" placeholder="Search Your Youtuber"/>
            <a className="buttonField">
                <i class="fas fa-search-plus"></i>
            </a>
        </div>
    );
}

export default SearchBar;
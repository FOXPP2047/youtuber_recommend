import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = () => {
    const [typedValue, setTypedValue] = useState("");
    function handleChange(event) {
        setTypedValue(event.target.value);
    }

    return (
        <div className="mainContainer">
            <input type="text" name="textField" className="textField" autoComplete="off"
             placeholder="Search Your Youtuber" onChange={event => handleChange(event)}/>
            <Link to={"/" + typedValue}>
                <div className="buttonField">
                    <i className="fas fa-search-plus"></i>
                </div>
            </Link>
        </div>
    );
}

export default SearchBar;
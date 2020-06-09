import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SearchBar.css";

import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce'),
    }
}


const SearchBar = () => {
    const [typedValue, setTypedValue] = useState("");
    function handleChange(event) {
        setTypedValue(event.target.value);
    }

    function handleEnter(event) {
        if(event.key === "Enter") {
            this.click();
            console.log("JAS");
        }
    }
    return (
        <div>
            <StyleRoot>
                <div style={styles.bounce} className="nameContainer">
                    <h1>Search Your Youtuber</h1>
                </div>
            </StyleRoot>
            <div className="mainContainer">
                <input type="text" name="textField" className="textField" autoComplete="off"
                placeholder="Search Your Youtuber" onChange={event => handleChange(event)}/>
                <Link to={"/" + typedValue}>
                    <div className="buttonField" onKeyDown={event => handleEnter(event)}>
                        <i className="fas fa-search-plus"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SearchBar;
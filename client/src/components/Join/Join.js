import React from "react";

import { Box } from "@material-ui/core"
import YoutubeParticle from "../YoutubeParticle";
import SearchBar from "../SearchBar/SearchBar";

import "./Join.css";

import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce'),
    }
}

const Join = () => {
    return (
        <Box component="div" className="main-container">
            <YoutubeParticle />
            <StyleRoot>
                <div style={styles.bounce} className="nameContainer">
                    <h1>Search Your Youtuber</h1>
                </div>
            </StyleRoot>
            <SearchBar />
        </Box>
    );
}

export default Join;
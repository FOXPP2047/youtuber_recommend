import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Join from "./components/Join/Join";

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join}></Route>
        </Router>
    );
    //return(<h1>Hello, World</h1>);
}

export default App;
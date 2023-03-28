import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/home" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;

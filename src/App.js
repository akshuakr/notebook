import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import Alert from "./components/Alert";

const App = () => {

    return (
        <>
            <NoteState>
                <Router>
                    <Navbar/>
                    <Alert message="Amazing react course"/>
                    <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/home" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                    </Routes>
                    </div> 
                </Router>
            </NoteState>
        </>
    );
};

export default App;

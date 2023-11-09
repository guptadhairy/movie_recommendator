import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from 'react';
// import Header from "./layout/Header";
import Footer from "./layout/Footer";
// import Home from "./components/Home";
import "../src/App.css"
import Main from "./components/Main";
import Signup from "./components/Signup";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;

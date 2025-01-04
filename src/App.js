import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './SubComponent/Home';
import Blog from './SubComponent/Blog';
import About from './SubComponent/About';
import Contact from './SubComponent/Contact';
import PrivacyPolicy from './SubComponent/PrivacyPolicy';
import PageNotFound from './Component/PageNotFound';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <div>

      <BrowserRouter>
        <div className="App">

          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;

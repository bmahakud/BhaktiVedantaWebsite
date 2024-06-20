import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Blog from './Blog'; 
import Yuvaudyami from './Yuvaudyami';
import Adj from './Adj';
import Ourprogram from './Ourprogram';
import Impact from './Impact';
import Partner from './Partner';
import Contact from './Contact';
import Success from './Success';
import Event from './Event';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/ourprogram" element={<Ourprogram />} />
        <Route path="/ourprogram/yuvaudyami" element={<Yuvaudyami />} />
        <Route path="/ourprogram/adj" element={<Adj />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/success" element={<Success />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header, Sidebar } from "./layouts"
import { Home, About, Contact } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='mainBody'>
        <Header />
        <div className='display-flex row'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Footer, Header, Sidebar } from "./layouts";
import CrudFish from "./pages/CrudFish/CrudFish";
import {
  About,
  AdminUsers,
  Contact,
  Country,
  Home,
  Region,
  TypeWater,
} from "./pages";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="mainBody">
        <Header />
        <div className="display-flex row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fishes" element={<CrudFish/>} />
            <Route path="/country" element={<Country />} />
            <Route path="/region" element={<Region />} />
            <Route path="/typewater" element={<TypeWater />} />
            <Route path="/adminusers" element={<AdminUsers />} />
            {/*} <Route path="/login" element={<Login />} />{*/}
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import logo from './logo.svg';
import './App.css';
import Header from './Component/Home/Header/Header';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import LoginMain from './Component/Login/LoginMain';
import DepartmnetMain from './Component/Department/DepartmnetMain';
import ContactUsMain from './Component/ContactUs/ContactUsMain';
import CoronaInfo from './Component/CoronaInfo/CoronaInfo';
import Gynecology from './Component/Gynecology/Gynecology';

function App() {

  return (
  <div className="">
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route  path="/" element={<Header />} />
        <Route path="login" element={<LoginMain />} />
        <Route path="/department" element={<DepartmnetMain/>} />
        <Route path="/contactUs" element={<ContactUsMain/>}/>
        <Route path="/coronaInfo" element={<CoronaInfo/>}/>
        <Route path="/Gynecology" element={<Gynecology/>}/>
      </Routes>
    </div>
  );
}

export default App;

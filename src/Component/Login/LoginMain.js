import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Login from './Login';

const LoginMain = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default LoginMain;

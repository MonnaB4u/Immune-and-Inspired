import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Department from './Department'
import './DepartmnetMain.css'
const DepartmnetMain = () => {
    return (
        <div >

            <div class="DepartmentHeader">
                <Navbar></Navbar>
                <Department></Department>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default DepartmnetMain;

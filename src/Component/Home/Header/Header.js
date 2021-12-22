import React from 'react';
import AboutGoal from '../AboutGoal/AboutGoal';
import Appointment from '../Appointment/Appointment';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import ServiceDepartments from '../ServiceDepartments/ServiceDepartments';
import Subscribe from '../Subscribe/Subscribe';
import './Header.css'

const Header = () => {
    return (
        <div className="headermain">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <AboutGoal></AboutGoal>
            <ServiceDepartments></ServiceDepartments>
            <Appointment></Appointment>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Header;

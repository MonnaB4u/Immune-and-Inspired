import React from 'react';
import DepartmentForm from '../Department/DepartmentForm';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import ContactUs from './ContactUs';
import './ContactUs.css'

const ContactUsMain = () => {
    return (
        <div className="conform">
            <Navbar></Navbar>
            <ContactUs></ContactUs>
            <div className="mt-5">
                <div className="container cotfor">
                    <div className="text-success p-3">
                        <p className="h2">
                           We'd Love To Hear From You
                        </p>
                    </div>
                    <div className="ml-4">
                        <p className="h6 px-3">
                          The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something else.
                        </p>
                    </div>
                    <DepartmentForm></DepartmentForm>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default ContactUsMain;

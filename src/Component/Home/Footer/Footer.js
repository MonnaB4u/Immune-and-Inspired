import React from 'react';
import logo from '../../Data/departments/favicon.ico'
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-success w-100 p-3">
            <footer className="">
                <div class="container">
                    <div class="row my-4">
                        <div class="col-sm ">
                            <img src={logo} alt="" />
                            <p className="text-white">Immune and Inspired</p>
                            <div className="my-5">
                                <small className="mt-5">Copyright ©2022 Immune and Inspired</small>
                            </div>

                        </div>
                        <div class="col-sm ">
                            <p className="text-white">Go Home</p>
                            <p className="text-white">Department</p>
                            <p className="text-white">Read our Blog</p>
                            <p className="text-white">Newa Later</p>
                        </div>
                        <div class="col-sm ">
                            <p className="text-white">Get Help</p>
                            <p className="text-white">Read FAQs</p>
                            <p className="text-white">Make an Appointment</p>
                            <p className="text-white">Contact Us</p>
                            <div className=" d-flex mr-5 beliefs">
                                <small className="smallx">Privacy policy</small>
                                <small className="smallx">Used of terms </small>
                                <small className="smallx" >Pricing</small>

                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

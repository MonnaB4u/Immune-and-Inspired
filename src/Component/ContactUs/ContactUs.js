import React from 'react';
import './ContactUs.css'
import imgico from '../Data/contact.png'
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdAttachEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="contactUSHeader">
            <div className="container py-4 my-4">
                <div class="row">
                    <div class="col-sm-6">

                        <div className="d-flex justify-content-center">
                            <p className="h2">
                                Get In Touch With Us
                            </p>
                        </div>

                        <div className="d-flex justify-content-center">
                            <p className="d-flexx">
                                The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan.
                            </p>
                        </div>
                        <div class=" d-flex justify-content-start mt-2 cardss">
                            <div className="bg-success p-4 log1">
                                <div className=" logoss text-white mt-2">
                                    <GoLocation size="3em" />
                                </div>
                            </div>

                            <div className="px-2 mt-2">
                                <h3 className="text-2xl">Address</h3>
                                <p className="text-gray-600">
                                    106-07, Samirunnesa Tower, Darus Salam, Mirpur, Dhaka -
                                    1216
                                </p>
                            </div>
                        </div>
                        <div class=" d-flex justify-content-start mt-2 cardss">
                            <div className="bg-success p-4 logoss1">
                                <div className=" logoss text-white mt-2">
                                    <BsFillTelephonePlusFill size="3em" />
                                </div>
                            </div>

                            <div className="px-2 mt-2">
                                <h3 className="text-2xl">Phone</h3>
                                <p className="text-gray-600">
                                    +880 1717 000000
                                    <br />
                                    +880 1521 000000
                                </p>
                            </div>
                        </div>

                        <div class=" d-flex justify-content-start mt-2 cardss">
                            <div className="bg-success p-4 logoss1">
                                <div className=" logoss text-white mt-2">
                                    <MdAttachEmail size="3em" />
                                </div>
                            </div>

                            <div className="px-2 mt-2">
                                <h3 className="text-2xl">Email</h3>
                                <p className="text-gray-600">
                                    support@immune-inspired.com
                                    <br />
                                    letstalk@immune-inspired.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 mt-5">
                        <img src={imgico} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

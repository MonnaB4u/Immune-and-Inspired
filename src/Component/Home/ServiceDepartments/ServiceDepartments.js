import React, { useState } from 'react';
import ServiceDataFromDatabase from './ServiceDataFromDatabase';
import './ServiceDepartments.css'


const ServiceDepartments = () => {

    return (
        <div className="mb-5 py-4">

            <div className="contsiner">

                <div className="textline d-flex justify-content-center">
                    <div className="servicetextline mt-3"></div>
                    <small className="serviceLinetext">World Class Service Departments</small>
                    <div className="servicetextline mt-3"></div>
                </div>
                <div className="d-flex justify-content-center h2">
                    <p className="Secondservicetitle m-4 ">We Believe The Heart Of Healthcare Is Service To Others</p>
                </div>
            </div>
            <div className="row">
                <ServiceDataFromDatabase></ServiceDataFromDatabase>
            </div>


        </div>
    );
};

export default ServiceDepartments;

import React from 'react';
import ServiceDataFromDatabase from '../Home/ServiceDepartments/ServiceDataFromDatabase';
import DepartmentForm from './DepartmentForm';
import './DepartmnetMain.css'
const Department = () => {
    return (
        <section className="my-4 py-4">
            <div className="container">
                <div className=" headertext mt-3 d-flex justify-content-center">
                    <div className="line mt-3"></div>
                    <p className="h4 text-success">Welcome to the</p>
                    <div className="line mt-3"></div>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="h1 text-success">Every Department Of Health & Family Benefit</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="mt-5"></div>
                <ServiceDataFromDatabase></ServiceDataFromDatabase>
            </div>

           <div className=" mt-5">
                {/* <div className="mt-5"></div> */}
             <DepartmentForm></DepartmentForm>
            </div>

        </section>
    );
};

export default Department;

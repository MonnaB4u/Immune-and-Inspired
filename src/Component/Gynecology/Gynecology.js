import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import image from "../Data/departments/gynecology.jpg"
import './Gynecology.css'
import DepartmentForm from '../Department/DepartmentForm';
const Gynecology = () => {
    return (
        <div className="div">
            <Navbar></Navbar>

            <div className="container containerbox bg-success mt-3 w-100">

                <div class="row">

                    <div class="col-sm py-2 my-3 m-5">
                        <img className="img-fluid Gynecologyimg" src={image} alt="" />
                    </div>
                    <div class="col-sm  py-2 my-3">
                        <div className="d-flex justify-content-center text-success">
                            <p className="h2">Gynecology</p>
                        </div>
                        <div className="text-center">
                            <p>When asked the question, responses will be superficial at best, and at worst.</p>
                        </div>
                        <p className=" pag">Gynaecology or gynecology is the medical practice dealing with the health of the female reproductive system. Almost all modern gynaecologists are also obstetricians. In many areas, the specialities of gynaecology and obstetrics overlap. The term means 'the science of women'.</p>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <button className="mt-2 appointmentbtn bg-success text-white">Make appointment</button>
                </div>

                <div className="d-flex justify-content-center mb-5">
                    <button href="/" className="mt-2 appointmentbtn bg-success text-white">Go Back</button>
                </div>

            </div>
            <div className="d-flex justify-content-center mt-5">
                <p className="h3 text-success">Feel free to Contact with us</p>
            </div>
            <DepartmentForm></DepartmentForm>
            <Footer></Footer>
        </div>
    );
};

export default Gynecology;

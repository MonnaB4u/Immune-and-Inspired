import React from 'react';
import './Appointment.css'
import img from '../../Data/appointment-bg.png'
import Subscribe from '../Subscribe/Subscribe';

const Appointment = () => {
    return (

        <div className="AppointmentHeader justify-content-center py-5 my-5">
            <div className="container">
                <div class="row">
                    <div class="col-sm-5 col-md-6">
                        <p className="h3 titleone">Take an Appointment</p>
                        <div className="reginputdiv">
                            <input type="text" className="reginput my-1" placeholder="First Name" />
                            <br />
                            <input type="text" className="reginput my-1" placeholder="Last Name" />
                            <br />
                            <input type="text" className="reginput my-1" placeholder="Your Email" />
                            <br />
                            <input type="number" className="reginput my-1" placeholder="Your Phone number" />
                            <p>Select date: <input type="date" className="dateTime"/></p>
                            <p>Select time: <input type="time" className="dateTime"/></p>
                            <textarea className="messagetype" placeholder="Your Full Address" name="message" rows="5" cols="30">

                            </textarea>
                            <br />
                            <button className="mt-2 appointmentbtn bg-success text-white">Make appointment</button>
                        </div>
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <img src={img} className="img-fluid w-100" alt="" />
                        </div>

                </div>
            </div >

        </div>

    );
};

export default Appointment;

import React from 'react';
import './AboutGoal.css'
import doc1 from '../../Data/doctor.webp'
import { useNavigate } from 'react-router';
import { GoDiffAdded } from "react-icons/go";

const AboutGoal = () => {
const navigate=useNavigate()
const handleContact=()=>{
    navigate('/contactUs')
}
    return (
        <div>
            <div className="py-5  my-5 bg-c">

                <div className="container">
                    <div class="line mb-2"></div>
                    <div className="or"><h3 className="text-success" >About Our Goal</h3></div>
                    <h1 className="mt-1">Contributing To Socity Through HealthCare</h1>
                </div>
                <div class="container px-lg-5">
                    <div class="row mx-lg-n5">
                        <div class="col-md-5 py-3 ">
                            <p className="text-justify t-bold lets">Let Us Do The Billing So you Can Focus On The Healing</p>
                            <div className="ml-6 para  ">
                                <img className="img-fluid" src={doc1} alt="" />
                            </div>
                        </div>

                        <div class="col-sm-5 py-3 px-lg-5  ">
                            <div className="mt-5 listss" >
                                <p className="text-truncate t-bold">The first thing to remember about success is that it is a process  nothing more, nothing less.</p>

                                <li className='text-decoration-none m-1'>
                                     <GoDiffAdded className="bg-success" />
                                    <small className="m-3">Get the oars in the water and start rowing.</small>
                                </li>
                                <li className="m-1">
                                    <GoDiffAdded className="bg-success" />
                                    <small className="m-3">Introspection is the trick.</small>
                                </li>

                                <li className="m-1">
                                   <GoDiffAdded className="bg-success" />
                                    <small className="m-3">Most people believe that success is difficult.</small>
                                </li>
                                <li className="m-1 ">
                                   <GoDiffAdded className="bg-success" />
                                    <small className="m-3">Success is something of which we all want more.</small>
                                </li>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <div className=" d-flex justify-content-center">
                        <button onClick={()=>handleContact()} className="AppointmentBtn ">Make an Appointment
                            {/* <i class="fa fa-stethoscope" style="font-size:24px"></i> */}
                            <i class="fa fa-stethoscope icoste"></i>
                        </button>
                    </div>

                    <div className="d-flexx px-5 mt-5">
                        <p className=" px-5">There is really no magic to it and it’s not reserved only for a select few people.
                            As such, success really has nothing to do with luck,
                            coincidence or fate. It really comes down to understanding
                            the steps in the process and then executing on those steps.</p>
                    </div>






                </div>

            </div>


        </div>


    );
};

export default AboutGoal;

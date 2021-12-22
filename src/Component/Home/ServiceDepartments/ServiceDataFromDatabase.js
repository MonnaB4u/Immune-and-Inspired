import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import serviceData from '../../Data/projectData/index'
import './ServiceDepartments.css'

const ServiceDataFromDatabase = () => {
 const navi=useNavigate()
 const haldledetaild=()=>{
     navi("/Gynecology")
 }
    const data = serviceData.slice(0, 8);
    const [allData] = useState(data)
    // console.log(data);
    return (
        <div className="container">

            <div className="row mx-5">
                {
                    allData.map((each, index) =>
                        <>
                            <div className="col-md-3 mt-3">
                                <div className="box">
                                    <img className="img-fluid " src={each.img} alt="" />
                                    <p className="h3">{each.title}</p>
                                    <p className="text-justify">{each.description}</p>
                                    <div className="text-center">
                                    <button onClick={()=>haldledetaild()} className="detailsbtn">See Details</button>
                                </div>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default ServiceDataFromDatabase;

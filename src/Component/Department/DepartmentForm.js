import React from 'react';
import './DepartmnetMain.css'
const DepartmentForm = () => {
    return (
        <div className=" d-flex justify-content-center my-4 py-4">
            <div class="container formcontrol">

                <div class="col-lg-12 well">
                    <div class="row">
                        <form className="">
                            <div class="col-sm-12">

                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <label>First Name</label>
                                        <input type="text" placeholder="Enter First Name Here.." class="form-control" />
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Enter Last Name Here.." class="form-control" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input type="text" placeholder="Email Address..." class="form-control" />
                                </div>


                                <div class="form-group">
                                    <label>Country/Region</label>
                                    <select class="form-control">
                                        <option>Bangladesh</option>
                                        <option>China</option>
                                        <option>Japan</option>
                                        <option>Canada</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Street Address</label>
                                    <input type="text" placeholder="Enter Email Address Here.." class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label>Your Message</label>
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                </div>

                                <div class="row">
                                    <div class="col-sm-4 form-group">
                                        <label>City</label>
                                        <input type="text" placeholder="Enter City Name Here.." class="form-control" />
                                    </div>
                                    <div class="col-sm-4 form-group">
                                        <label>State/Province</label>
                                        <input type="text" placeholder="Select Country Name Here.." class="form-control" />
                                    </div>

                                    <div class="col-sm-4 form-group">
                                        <label>Zip/Postal</label>
                                        <input type="text" placeholder="Select Country Name Here.." class="form-control" />
                                    </div>

                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="button" class=" center bg-success paddingbtn text-white mt-4">Contact With US</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DepartmentForm;

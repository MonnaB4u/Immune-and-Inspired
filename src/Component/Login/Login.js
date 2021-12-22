import React from 'react';
import './Login.css'
import { GoSignIn } from "react-icons/go";
const Login = () => {
    return (
        <div className="loginHeader my-3 py-3 d-flex justify-content-center">
            <div className="component ">
                <div className="signInIcon d-flex justify-content-center">
                    <p className="h1 text-success">Sign In</p>

                </div>
                <div className="linesign"></div>
                <div className="Fornminput ">
                    <input className="signInput  m-1" type="text" Placeholder="Your Email" />
                    <br />
                    <input type="password" className="signInput m-1" Placeholder="Your Password" />
                    <br />
                    <button className="Signbtn m-1 mt-3 text-white bg-success">Sign In <GoSignIn className="ml-2"/></button>

                    <div className="row mt-3">
                        <a href=""> Forgot your password?</a>
                        <p>Dont have an account? <a href="">Create new</a> </p>
                    </div>
                    <p className="h3 text-success">or</p>
                    <p className="h3 ">Sign in with</p>
                    <div className="d-flex justify-content-center logicon">
                        <i class="fa fa-google gg" ></i>
                        <i class="fa fa-github gg"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="subscribeHeader">
            <div className="container py-5 my-5">
                <div className="d-flex justify-content-center">
                    <p className="h3 head">Subscribe to our news later</p>
                </div>
                 <div className="d-flex justify-content-center">
                   <input type="text" className="subscribeinput border border-secondary" placeholder="Your Email" />
                   <button className="subscribebtn">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;

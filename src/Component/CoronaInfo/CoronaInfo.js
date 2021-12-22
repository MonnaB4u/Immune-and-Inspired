import { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import CoronaCard from './CoronaCard/CoronaCard';

const CoronaInfo = () => {



    return (
        <div className="">
            <div className="">
                <div className="row">
                    <Navbar></Navbar>
                    <CoronaCard></CoronaCard>
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default CoronaInfo;

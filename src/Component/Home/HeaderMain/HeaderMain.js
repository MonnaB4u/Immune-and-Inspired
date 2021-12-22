import React from 'react';
import './HeaderMain.css'
import img from '../../Data/banner1.png'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router';
const HeaderMain = () => {
    const navigate=useNavigate()
    const goDepartmnet=()=>{
        navigate('/department')
    }
    return (
        <div className="hmain">
            <div className="himg">

                <div className="hdimg">
                    <img className="img-fluid " src={img} alt="" />
                </div>

                <div className="check justify-content-center ">
                    <h1 className="text-success">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, totam.</h1>
                     <button onClick={()=>goDepartmnet()} className="my-3 text-white checkbtn">Check Out <IoIosAddCircleOutline size="1.5em" className="mb-1" /></button>

                </div>

                {/* <div className="check">
                  <button>Check Out</button>
                </div> */}

            </div>

        </div>
    );
};

export default HeaderMain;

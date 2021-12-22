import React from 'react';
import './Navbar.css'
import logo from '../../Data/departments/favicon.ico'
import { useNavigate } from 'react-router';


const Navbar = () => {
  let history = useNavigate();

  function handleClick() {
    history('/login')
  }
  function handleClickhome() {
    history('/')
  }
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <a onClick={() => handleClickhome()} className="navImg text-white" href=""><img src={logo} alt=""></img> Immune and Inspired</a>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active ">
            <a class="nav-link ancor  text-white " href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link ancor  text-white " href="#">Department</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ancor  text-white " href="#">Contact Us</a>
          </li>

          <li class="nav-item">
            <a class="nav-link ancor  text-white " href="/coronaInfo">Corona Info</a>
          </li>

        </ul>

        <button onClick={() => handleClick()} class="btn-nav ml-auto bg-success" type="submit">Log In</button>



      </div>
    </nav>

  );
};

export default Navbar;

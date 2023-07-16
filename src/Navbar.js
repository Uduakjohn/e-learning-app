import React from 'react';
import 'boxicons';
import "./Navbar.css";
//import { Link, NavLink } from "react-router-dom";
//import Link from 'link-react';

function Navbar() {
  return (
    <div className='everything'>
    <header>
 
      
      <a href='#' className='logo'>
        <img src='images/moritz-mentges-5MlBMYDsGBY-unsplash.jpg' alt=''/>
      </a>
      
  <ul className='navbar'>

  <li>  <a href='home'>Home</a></li>
   <li> <a href='categories'>categories</a></li>
    <li><a href='course'>Courses</a></li>
    <li><a href='about'>About Us</a></li>
    <li><a href='contact'>Contact</a></li>
  </ul>

  <div className='header-icons'>
<a href='#'> <box-icon name='user'></box-icon></a>
<a href=''><box-icon type='solid' name='heart'></box-icon></a>
<a href=''><box-icon name='cart'></box-icon></a>
<a href=''><box-icon name='menu'></box-icon></a>
<div className='bx bx-menu' id='menu-icon'></div>
</div>
  
      </header>

{/* home section */}
      
    <div className='home' id='home'>
     {/*  <div className='home-text'>
        <h6>Best online learning platform</h6>
        <h1>Accessible Online Courses For All</h1>
        <p>Own your future learning new skills online</p>
</div> */}
<div className='learn'>

 <h3>Accessible Online learning Courses for All</h3> 
<h6>Best online learning platform</h6>
<p>Own your future learning new skills online</p>

</div>
        <div className='latter'>
            <form>
                <input type='email' placeholder='Write Your Email' required/>
                <input type='submit' value="Let's Start" required/>

            </form>
        
      </div>

      <div className='home-img'>
        <img src='images/pexels-tranmautritam-92331.jpg' alt=''/>
      </div>
    </div>


    {/* container */}

    <section className=' container'>
      <div className='container-box'>
        <div className='container-img'>
          <img src= '' alt=''/>
        </div>
        <div className='container-text'>
          <h4>5k</h4>
          <p>Online Courses</p>
        </div>
      </div>


      <div className='container-box'>
        <div className='container-img'>
          <img src= '' alt=''/>
        </div>
        <div className='container-text'>
          <h4>5k</h4>
          <p>Online Courses</p>
        </div>
      </div>


      <div className='container-box'>
        <div className='container-img'>
          <img src= '' alt=''/>
        </div>
        <div className='container-text'>
          <h4>5k</h4>
          <p>Online Courses</p>
        </div>
      </div>


      <div className='container-box'>
        <div className='container-img'>
          <img src= '' alt=''/>
        </div>
        <div className='container-text'>
          <h4>5k</h4>
          <p>Online Courses</p>
        </div>
      </div>

    </section>
    </div>
  )
}

export default Navbar

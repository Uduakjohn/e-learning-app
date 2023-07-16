import React from 'react'
import "./Home.css"

function Home() {
  return (
    
    <div className='home' id='home'>
      <div className='home-text'>
        <h6>Best online learning platform</h6>
        <h1>Accessible Online Courses For All</h1>
        <p>Own your future learning new skills online</p>

        <div className='latter'>
            <form>
                <input type='email' placeholder='Write Your Email' required/>
                <input type='submit' value="Let's Start"/>

            </form>
        </div>
      </div>

      <div className='home-img'>
        <img src='images/pexels-tranmautritam-92331.jpg' alt=''/>
      </div>
    </div>
    
  )
}

export default Home

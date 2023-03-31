import React from 'react'
import musk from '../../assets/musk.jpeg'
import './Home.css'

const Home = () => {
  return (
    <div className="home" id='page1'>
       <div className='home-left'>
          <div className="home-image">
             <img src={musk} alt="musk" />
          </div> 
          <div className="home-text">
            <h1>Elon Musk</h1>
            <h3>American Business Magnate and Investor</h3>
          </div> 
        </div>
        <div className="home-right">
          <h1>"The first step is to establish that something is possible; then probability will occur."</h1>
        </div>
    </div>
    
  )
}

export default Home

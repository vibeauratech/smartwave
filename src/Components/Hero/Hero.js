import React from 'react'
import './Hero.css';
import {Link} from "react-router-dom"

function Hero() {
  return (
    <div className='hero'>
       <h2>Ignite Your Prosperity In The Digital Age</h2>
       <p>Monetize your influence and audience by promoting products and earning commissions on every sale.</p>

       <div className='hero-btn'>
        <button className='get'>Get Started</button>
        <Link  to= {`./affiliate`}><button className='learn'>Learn More</button></Link>
       </div>

       <div className='hero-img'>
         <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706291087/happy-attractive-african-woman-smiling-cheerfully-while-looking-mobile-phone-screen-PhotoRoom.png-PhotoRoom_ylzhz2.png" alt="" />
       </div>

       <div className='cover'></div>

       <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
    </div>
  )
}

export default Hero
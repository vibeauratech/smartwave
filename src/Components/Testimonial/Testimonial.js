import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
    <div className='test'>
        <span className='feat'>TESTIMONIAL</span>
        <h2>Words from a SmartWaver</h2>


       <div className='testimonial'>
          <div className='testimonial-img'>
           <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706359144/african-american-young-woman-s-half-length-portrait-blue-studio_ihgeml.jpg" alt="" />
          </div>

          <div className='test-con'>
            <img src="https://img.freepik.com/free-photo/smiley-african-woman-with-golden-earrings_23-2148747979.jpg?size=626&ext=jpg&uid=R72732839&ga=GA1.2.483734296.1687457092&semt=ais" alt="" />
            <h4>“Joining SmartWave was a game-changer for me. The variety of high-converting offers, detailed analytics, and timely payouts have significantly boosted my earnings. This platform truly understands what affiliates need for success!”</h4>
            <p>Amy R.</p>
            <span>Affiliate Marketer</span>
          </div>
        </div>
    </div>
  )
}

export default Testimonial
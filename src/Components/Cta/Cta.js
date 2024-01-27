import React from 'react'
import './Cta.css'

function Cta() {
  return (
    <div className='cta'>
        <div className='flap-con'>
            <div className='flap'></div>
            <h2>Join SmartWave Today and <strong>Transform</strong> Your <strong>Online Success!</strong></h2>
            <button>Get started</button>
        </div>

        <div className='cta-img'>
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706352381/handsome-young-african-man-holding-mobile-phone-gesturing-while-standing-against-grey-wall-PhotoRoom.png-PhotoRoom_ietvrj.png" alt="" />
          <div className='fill'></div>
        </div>       
    </div>
  )
}

export default Cta
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <div className='footer-brand'>
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706271726/Smartwave_FavIcon_jc0dsq.png" alt="" />
          <span>SmartWave</span>
        </div>
        <p>Monetize your influence and audience by promoting products and earning commissions on every sale.</p>
      </div>

      <div className='footer-rep'>
        <div className='footer-link'>
          <p>Company</p>
          <span>About Us</span>
          <span>FAQs</span>
          <span>About Us</span>
        </div>

        <div className='footer-link'>
          <p>Socials</p>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Linkedin</span>
        </div>

        <div className='footer-link'>
          <p>Info</p>
          <span>Affiliate network</span>
          <span>Vendors</span>
          <span>Refund Policy</span>
          <span>FAQs</span>
        </div>

        <div className='footer-link'>
          <p>Help</p>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Disclaimer</span>
        </div>
      </div>

      <div className='copy-con'>
        <div className='copy'>
         <p>Copyright © 2023. 3Ci Consulting Limited</p>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer
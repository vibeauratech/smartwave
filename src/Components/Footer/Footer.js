import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
         <div className='footer-text'>
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
        </div>

       <div className='dist'>
          <div className='socials'>
            <p>Socials</p>
            <span>Connect with us on these networks</span>

            <div className='social-links'>
              <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-facebook-50_mygc3g.png" alt=""/></div>
              <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-x-50_mmnjjz.png" alt=""/></div>
              <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-instagram-50_1_spmzfu.png" alt=""/></div>
              <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-linkedin-48_rwii0j.png" alt=""/></div>
            </div>
          </div>

          <div className='copy-con'>
             <div>
              <span><strong>Changes to terms:</strong> SmartWave reserves the right to amend any portion of our Terms of Service and Privacy Policy as users will be duly notified of any modifications. </span>
             </div>

             <div>
              <span><strong>User data privacy:</strong> SmartWave values your privacy as any information your share is governed by our privacy policy </span>
             </div>

            <div className='copy'>
              <p>Copyright © 2023 SmartWave </p>
            </div> 
          </div>

       </div>
    </div>
  )
}

export default Footer
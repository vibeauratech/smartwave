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
            <span>Contact Us</span>
          </div>

          <div className='footer-link'>
            <p>Information</p>
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
              <p>Lagos Office</p>
              <span>Federal Mogul Plaza, 2nd Floor Zone C,Block 9A, ASPMDA Trade Fair Complex,Badagry Express Way, Lagos </span>
             </div>

             <div>
               <p>London Office</p>
              <span>5 Beechvale Close London,N129AW London,United Kingdom</span>
             </div>

            <div >
              <p className='copy'>Copyright © 2023 SmartWave </p>
            </div> 
          </div>

       </div>
    </div>
  )
}

export default Footer
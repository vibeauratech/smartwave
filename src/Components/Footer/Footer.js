import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom"

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
            <Link  to= {`./about`}> <span>About Us</span></Link>
            <Link  to= {`./faq`}>   <span>FAQs</span></Link>
            <Link  to= {`./contact`}> <span>Contact Us</span></Link>
          </div>

          <div className='footer-link'>
            <p>Information</p>
            <Link  to= {`./affiliate`}> <span>Affiliate Network</span></Link>
            <Link  to= {`./vendor`}> <span>Vendors</span></Link>
            <Link  to= {`./refund`}> <span>Refund Policy</span></Link>        
          </div>

          <div className='footer-link'>
            <p>Legal</p>
            <Link  to= {`./terms`}><span>Terms of Use</span></Link>
            <Link  to= {`./privacy`}><span>Privacy Policy</span></Link>
            <Link  to= {`./disclaimer`}><span>Disclaimer</span></Link>
          </div>
         </div>
        </div>

       <div className='dist'>
          <div className='socials'>
            <p>Socials</p>
            <span>Connect with us on these networks</span>

            <div className='social-links'>
              <Link  to= {"https://Facebook.com/smartwaveng"}> <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-facebook-50_mygc3g.png" alt=""/></div></Link>
              <Link  to= {"http://Twitter.com/smartwaveng"}> <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-x-50_mmnjjz.png" alt=""/></div></Link>
              <Link  to= {"http://Instagram.com/smartwaveng"}> <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-instagram-50_1_spmzfu.png" alt=""/></div></Link>
              <Link  to= {"http://tiktok.com/@Smartwaveng"}> <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706472517/icons8-tiktok-50_dlug3j.png" alt=""/></div></Link>
            </div>
          </div>

          <div className='copy-con'>
             <div>
              <p>Lagos Office</p>
              <span>Federal Mogul Plaza, 2nd Floor Zone C,Block 9A, ASPMDA Trade Fair Complex, Badagry Express Way, Lagos </span>
             </div>

             <div>
               <p>London Office</p>
              <span>5 Beechvale Close London, N129AW London, United Kingdom</span>
             </div>

            <div >
              <p className='copy'>Copyright © 2024 SmartWave </p>
            </div> 
          </div>

       </div>
    </div>
  )
}

export default Footer
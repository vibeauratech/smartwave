import React from 'react'
import './Contact.css';
import {Link} from "react-router-dom"


function Contact() {
  return (
    <div className='contact'>
      <div className='contact-con'>

        <div className='contact-box'>
          <div>
           <h2>Email support</h2>
           <Link className='mail-link' to= {"mailto:support@SmartWave.ng?subject = Feedback&body = Message"}>support@SmartWave.ng</Link>
          </div>

          <h2>Office Address</h2>

          <div>
            <p>Lagos Office</p>
          <span>Federal Mogul Plaza, 2nd Floor Zone C,Block 9A, ASPMDA Trade Fair Complex, Badagry Express Way, Lagos </span>
          </div>

          <div>
            <p>London Office</p>
            <span>5 Beechvale Close London, N129AW London, United Kingdom</span>
          </div>   
        </div>

        <div className='soc-con'>
         <h2>Contact us through our socials</h2>

         <div className='social-links'>
          <Link  to= {"https://Facebook.com/smartwaveng"}> <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-facebook-50_mygc3g.png" alt=""/></div></Link>
          <Link  to= {"http://Twitter.com/smartwaveng"}> <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-x-50_mmnjjz.png" alt=""/></div></Link>
          <Link  to= {"http://Instagram.com/smartwaveng"}> <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706376471/icons8-instagram-50_1_spmzfu.png" alt=""/></div></Link>
          <Link  to= {"http://tiktok.com/@Smartwaveng"}> <div className='social-box'><img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706472517/icons8-tiktok-50_dlug3j.png" alt=""/></div></Link>
         </div>
        </div>    
          
      </div>

      <div className='contact-form' >

        <h2>Kindly fill out this form to reach out to us</h2>

        <form >
          <label>Full Name</label>
          <input type="text" name="user_name" placeholder='Enter your full name' />

          <label className='pad'>Email</label>
          <input type="email" name="user_email" placeholder='Enter your email address' />

          <label className='pad'>Phone Number</label>
          <input type="text" name="user_email" placeholder='Enter your phone number' />

          <label className='pad'>Mode of application</label>
          <select  type=""  >
            <option className='option'  value="">New to platform</option>
            <option className='option'value="">Affiliate</option>
            <option className='option' value="">Vendor</option> 
          </select>
                  
                  
          <label className='pad'>Your Query</label>
          <textarea name="message" placeholder='Enter your message' />

                
          <input className='submit-btn' type="submit" value="Send Message" />
          
        </form>
        
      </div>      
    </div>
  )
}

export default Contact
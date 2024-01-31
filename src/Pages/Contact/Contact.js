import React, { useState } from 'react'
import './Contact.css';
import {Link} from "react-router-dom"
import axios from "axios"


function Contact() {
  const defaultData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    applicationMode: "",
    message: ""
  }
  const [data, setData] = useState(defaultData)
  console.log(data)
  const handleValidation = () => {
    if(data.fullName === "") {
      alert("Fullname is required")
    }
    else if(data.email === "") {
      alert("Email is required")
    }
    else if(data.phoneNumber === "") {
      alert("Fullname is required")
    }
    else if(data.applicationMode === "") {
      alert("Application mode is required")
    }
    else if(data.message === "") {
      alert("Message is required")
    } else {
      return true
    }
  }
  const handleChange = (event) => {
    setData({...data, [event.target.name] : event.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(handleValidation())
    if (handleValidation()) {
      console.log("Email Data: ", data)
      const payload = {
        fullName: data.fullName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    applicationMode: data.applicationMode,
    message: data.message,
    recipientEmail: "emmanuelakharia@gmail.com"
      }
      const res = await axios.post("https://mailapi-chg3.onrender.com/send-mail", payload)
      console.log(res)
      if (res) {
        alert(res.data.message)
      } alert("An error occured while sending the mail")
    }
  }
  return (
    <div>

        <div className='faq-div'>
          <div className='faq-overlay'>
            <h2>Contact Us</h2>
          </div>
         </div>

     <div className='contact' >
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
        <input type="text" name="fullName" onChange={((e) => handleChange(e))} placeholder='Enter your full name' />

        <label className='pad'>Email</label>
        <input type="email" name="email" onChange={((e) => handleChange(e))} placeholder='Enter your email address' />

        <label className='pad'>Phone Number</label>
        <input type="text" name="phoneNumber" onChange={((e) => handleChange(e))} placeholder='Enter your phone number' />

        <label className='pad'>Mode of application</label>
        <select name='applicationMode' onChange={((e) => handleChange(e))}  type=""  >
          <option className='option'  value="New to platform">New to platform</option>
          <option className='option'value="Affiliate">Affiliate</option>
          <option className='option' value="Vendor">Vendor</option> 
        </select>
                
                
        <label className='pad'>Your Query</label>
        <textarea name="message" onChange={((e) => handleChange(e))} placeholder='Enter your message' />

              
        <input className='submit-btn' type="submit" onClick={handleSubmit} value="Send Message" />
        
      </form>

      </div>     
    </div> 
    </div>
  )
}

export default Contact
import React, { useState } from "react";
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
   
    return (
       <div>
         <div className="navbar">
          <div className='nav-con'>
            <Link  to= {`./`}> 
               <div className='logo'>
               <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706271726/Smartwave_FavIcon_jc0dsq.png" alt="" />
               <p>SmartWave</p> 
               </div>
            </Link>
           

           <ul className="nav-items">
              <li>
                 <Link className="nav-list" to= {`./`}> Home</Link>
              </li>

              <li>
                 <Link className="nav-list" to= {`/affiliate`}>Affiliate</Link>
              </li>

              <li>
                 <Link className="nav-list" to= {`/Vendor`}> Vendor</Link>
              </li>

              <li>
                 <Link className="nav-list" to= {`/Faq`}> FAQ</Link>
              </li>

              <li>
                 <Link className="nav-list" to= {`/Contact`}> Contact Us</Link>
              </li>
           
           </ul>

  
            <div className='try-btn'>
               <Link  to= {`./`}> <button>Login</button> </Link>  
             
                <div className='menu-toggle' onClick={() => setNavOpen(!navOpen)}>
                    <div className= {navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                        <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                        <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                    </div>
                </div>
            </div> 


            
            <div className='nav-overlay' style={{
                top: navOpen ? "0" : "-180%",
                transitionDelay : navOpen ? "0s" : "0s"
            }}>

                <ul className='nav-links'>
                    <li className='nav-item'>
                      <Link to= {`./`} onClick={() => setNavOpen(!navOpen)} style={{
                           top: navOpen ? "0" : "150px",
                           transitionDelay : navOpen ? "0" : "0s"   
                      }} >  Home</Link>
                       <div className='nav-wrapper'></div>
                    </li>  

                    <li className='nav-item'>
                      <Link to= {`/affiliate`} onClick={() => setNavOpen(!navOpen)} style={{
                         top: navOpen ? "0" : "150px",
                         transitionDelay : navOpen ? "0s" : "0s" 
                      }}>Affiliate</Link>
                       <div className='nav-wrapper'></div>
                    </li>  
                    
                    <li className='nav-item'>
                      <Link to= {`./vendor`} onClick={() => setNavOpen(!navOpen)} style={{
                         top: navOpen ? "0" : "150px",
                         transitionDelay : navOpen ? "0s" : "0s" 
                      }}>Vendor</Link>
                       <div className='nav-wrapper'></div>
                    </li>  

                    <li className='nav-item'>
                      <Link to= {`./faq`} onClick={() => setNavOpen(!navOpen)} style={{
                         top: navOpen ? "0" : "150px",
                         transitionDelay : navOpen ? "0s" : "0s" 
                      }}>FAQs</Link>
                       <div className='nav-wrapper'></div>
                    </li>  

                    <li className='nav-item'>
                      <Link to= {`./contact`} onClick={() => setNavOpen(!navOpen)} style={{
                         top: navOpen ? "0" : "150px",
                         transitionDelay : navOpen ? "0s" : "0s" 
                      }}>Contact Us</Link>
                       <div className='nav-wrapper'></div>
                    </li>      
                </ul>
            </div>
          </div> 
         </div>

         
       </div>

      
      

    )
  }
export default Navbar
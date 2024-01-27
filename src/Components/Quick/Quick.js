import React from 'react'
import './Quick.css'

function Quick() {
  return (
    <div className='quick'>
         <div>
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706306215/5921785-PhotoRoom.png-PhotoRoom_dtobfg.png" alt="" />
        </div> 

        <div>
            <h2>Ready to Transform Your Future with SmartWave?</h2>
            
            <div className='signing'>
                <div className='signing-info'>
                    <p>Register Now</p>
                    <span>Complete a simple form and kickstart your journey to financial independence.</span>
                </div>

                <div className='signing-info'>
                    <p>Invest in Your Future</p>
                    <span> Make a small investment that will pave the way for substantial returns. Your success story begins with SmartWave.</span>
                </div>

                <div className='signing-info'>
                    <p>Seize the Opportunity</p>
                    <span>Explore our extensive digital product catalog, refer clients for business registrations, and witness your earnings skyrocket.</span>
                </div>
            </div>

            <button>Get started</button>
        </div>     
    </div>
  )
}

export default Quick
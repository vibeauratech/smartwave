import React from 'react'
import './Affiliate.css';
import {Link} from "react-router-dom"


function Affiliate() {
  return (
    <div>
      <div className='hero'>
       <h2>Become part of Africa's Premier Affiliate Network with SmartWave!</h2>
       <p>SmartWave, the leading platform, connects digital creators with a vast audience. Earn over N500, 000 a month selling products in our affiliate platform, registering businesses and from referrals. You can start selling immediately, earning commissions for every sale through your affiliate link. Join us and amplify your impact and income! 🚀💡 #SmartWaveAffiliates #ElevateYourEarnings </p>

       <div className='hero-btn'>
        <button className='get'>Sign Up Now</button>
       </div>

      <div className='bar'></div>

       <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>
        <div className='flake'></div>      
    </div>

    <div className='aff'>
      <div className='aff-lite'>
        <h2>Over 50,000 Affiliate Partners</h2>
        
        <div>
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706483476/african-females-shopping-online-while-sitting-park_jdutkj.jpg" alt="" />
        </div>
      </div>

      <div className='aff-dark'>
        <h2>Affiliates Earning NGN 100,000,000+</h2>
        <div>
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706483473/african-american-male-freelancer-sitting-by-large-window-hotel-lobby-using-wireless-internet-connection-working-remotely-laptop-sending-voice-message-via-online-app-mobile-phone_yhb2xl.jpg" alt="" />
        </div>
      </div>
    </div>

   
      <div className='benefit'>
         <span className='feat'>OUR RANGE</span>
         <h2>Diversify Your Affiliate Portfolio with SmarWave</h2>

         <div className='ben-con'>
            <div className='ben-box'>
             <div className='ben-icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706321775/icons8-jet-85_q3ekaa.png" alt="" />
             </div>
             <p>CAC Business Registration</p>
             <span>Provide CAC business registration services, offering affiliates a unique opportunity to assist clients in formalizing their businesses.</span>
            </div>

            <div className='ben-box'>
            <div className='ben-icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706321775/icons8-jet-85_q3ekaa.png" alt="" />
             </div>
             <p>Ebooks</p>
             <span> Optimal platform for selling both downloadable and non-downloadable ebooks in any format.</span>
            </div>

            <div className='ben-box'>
            <div className='ben-icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706321775/icons8-jet-85_q3ekaa.png" alt="" />
             </div>
             <p> Courses & Memberships</p>
             <span>Host unlimited courses and memberships with content security, unlimited videos/files, and unlimited students.</span>
            </div>

            <div className='ben-box'>
            <div className='ben-icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706321775/icons8-jet-85_q3ekaa.png" alt="" />
             </div>
             <p>Event Tickets & Training</p>
             <span> Offer tickets for various events, masterclasses, workshops, webinars, and exclusive training sessions.</span>
            </div>

            <div className='ben-box'>
            <div className='ben-icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706321775/icons8-jet-85_q3ekaa.png" alt="" />
             </div>
             <p>Services</p>
             <span> Market a wide array of services, from coaching and consultations to counseling and design services.</span>
            </div>

            <div className='ben-box'>
            <div className='ben-icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706321775/icons8-jet-85_q3ekaa.png" alt="" />
             </div>
             <p>Digital Products</p>
             <span>Effortlessly sell diverse digital products: content packs, designs, bundles, and more.</span>
            </div>
         </div>
      </div>

      <div className='quick'>
         <div>
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706306215/5921785-PhotoRoom.png-PhotoRoom_dtobfg.png" alt="" />
        </div> 

        <div>
            <h2>Embrace SmartWave.<strong> Instant</strong> withdrawals, <strong>Unlimited</strong> earnings</h2>
            
            <div className='signing'>
                <div className='signing-info'>
                    <p>Register </p>
                    <span>Complete the brief signup form and pay an annual fee of N10,000 only.</span>
                </div>

                <div className='signing-info'>
                    <p>Promote</p>
                    <span> Select a product, share your affiliate link, and start promoting. </span>
                </div>

                <div className='signing-info'>
                    <p>Instant withdrawals</p>
                    <span>Earn commissions whenever your link drives a sale or you register a business for someone on the platform. Withdraw funds at your convenience, unrestricted by weekly limits</span>
                </div>
            </div>
            <button>Get started</button>
        </div>     
    </div>

    <div className='con'>
       <div className='about-text'>
            <div>
            <h2>Frequently asked questions</h2>
             <Link  to= {`/Faq`}><button>View Faqs</button></Link>
            </div>

            <div>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706483476/medium-shot-man-working-laptop_jyddes.jpg" alt="" />
            </div>
         </div>
    </div>

    <div className='marketplace'>
      <h2>SmartWave rewards affiliates generously with a 50% referral bonus for every successful recommendation</h2>
      <p>Join our thriving community and start earning big by recommending exceptional products on SmartWave! 💻🌍 #DigitalCreators #AffiliateSuccess</p>
      <button>Join now! 💰🚀</button>
    </div>

    </div>
  )
}

export default Affiliate
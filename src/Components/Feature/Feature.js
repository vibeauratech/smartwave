import React from 'react'
import './Feature.css'

function Feature() {
  return (
    <div className='feature'>
      <span className='feat'>FEATURES</span>
      <h2>What SmartWave does for <strong>users?</strong></h2>

      <div className='key-features'>
        <div className='key'>
            <div className='icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706319001/icons8-web-50_ih3lsh.png" alt="" />
            </div>
            <p>Digital Marketplace Dominance</p>
            <span>With an extensive catalog of high-demand digital products, our affiliates have tapped into a goldmine of opportunities, earning consistently over #500,000 Naira a month</span>
        </div>

        <div className='key'>
            <div className='icon'>
             <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706319001/icons8-bag-64_evgec0.png" alt="" />
            </div>
            <p>Business Registration Mastery</p>
            <span>SmartWave empowers affiliates to make a real impact by assisting entrepreneurs in registering their businesses with the Corporate Affairs Commission (CAC).</span>
        </div>

        <div className='key'>
            <div className='icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706319001/icons8-team-50_i0hmdx.png" alt="" />
            </div>
            <p>Thriving Affiliate Network</p>
            <span> SmartWave provides a platform to connect, collaborate, and share strategies, ensuring that everyone benefits from the collective success of the community.</span>
        </div>

        <div className='key'>
            <div className='icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706319001/icons8-rewards-66_nctzyk.png" alt="" />
            </div>
            <p>Rewards Beyond Commissions</p>
            <span> At SmartWave, success is celebrated at every step. Our affiliates enjoy exclusive bonuses, incentives, and recognition that go above and beyond traditional commission structures.</span>
        </div>

        <div className='key'>
            <div className='icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706319001/icons8-lock-50_yqgjem.png" alt="" />
            </div>
            <p>Trust in Secure Transactions</p>
            <span>Security is not an afterthought; it's our foundation. SmartWave employs cutting-edge encryption and security measures to guarantee a safe and seamless experience, earning the trust of our ever-expanding community</span>
        </div>

        <div className='key'>
            <div className='icon'>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706319000/icons8-bulb-80_ydl1f7.png" alt="" />
            </div>
            <p>Comprehensive Business Solutions</p>
            <span> Use our platform to not only sell digital products but also to streamline business registrations for your clients, offering a full suite of services in one convenient location.</span>
        </div>

      </div>
    </div>
  )
}

export default Feature
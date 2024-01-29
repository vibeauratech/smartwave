import React from 'react'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import './Faq.css';

const AccordionItem = ({ header, ...rest }) => (
 <Item
   {...rest}
   header={
     <>
       {header}
       <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1706473468/icons8-add-48_ojrahe.png" className='acc-img' alt="Chevron Down" />
     </>
   }
  
 />
);



function Faq() {
  return (
    <div>
      <div className='about-hero'>
        <h2>FAQs</h2>
        <p>Frequently Asked Questions - SmartWave Marketplace</p>

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
        <div className='flake'></div>
      </div>

      <div className='faq'>
         {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
         <Accordion transition transitionTimeout={250}>
          <AccordionItem header="What is SmartWave and how does it work?" initialEntered>
          SmartWave is an online marketplace that provides a platform for vendors to sell digital products, affiliates to promote the digital products, register business for entrepreneurs, and make money online. 
          </AccordionItem>

          <AccordionItem header="How do I join SmartWave as an affiliate?">
          Joining SmartWave as an affiliate is easy. Simply visit our website, navigate to the affiliate section, and follow the registration process. Once registered, you can start promoting products and earning commissions.
          </AccordionItem>

          <AccordionItem header="What types of digital products are available on SmartWave?">
          SmartWave offers a diverse range of digital products, including ebooks, courses, designs, and more. Our marketplace caters to various interests and needs.
          </AccordionItem>

          <AccordionItem header="Can I register my business on SmartWave?">
          Absolutely! SmartWave not only empowers individuals with digital skills but also facilitates them to earn money through business registration. Connect with our support team for guidance through the seamless registration process.
          </AccordionItem>

          <AccordionItem header="How does the 30-day money-back guarantee work for digital products?">
          If you are dissatisfied with a digital product purchased on SmartWave, you can request a refund within 30 days of purchase. Conditions apply, and our refund policy is detailed on our website.
          </AccordionItem>

          <AccordionItem header="Are there any fees for joining SmartWave as an affiliate?">
          Yes, there is a nominal yearly signup fee of N10,000 for affiliate registration. This fee helps maintain the quality and support services offered to our affiliates.
          </AccordionItem>

          <AccordionItem header="Is the affiliate registration fee refunded on SmartWave?">
          Yes, on SmartWave, the affiliate registration fee is refundable. You qualify for a refund when you successfully refer two new affiliates to join the platform.
          </AccordionItem>

          <AccordionItem header="How can I become a vendor on SmartWave?">
          To become a vendor on SmartWave, review the terms and conditions, submit details of your product for approval, and pay the annual registration fee. Once approved, you'll receive a registration link to sign up as a vendor.
          </AccordionItem>

          <AccordionItem header="Is there a fee for registering as a vendor on SmartWave?">
          Yes, there is a vendor registration fee of $30.00 per annum for each product. This fee is non-refundable and subject to change.
          </AccordionItem>

          <AccordionItem header="How does the commission structure work for vendors on SmartWave?">
          Vendors set the commission percentage for affiliates. Affiliates earn a commission on each sale based on the agreed percentage.
          </AccordionItem>

          <AccordionItem header="What fees are associated with selling products on SmartWave?">
          SmartWave charges a 10% fee on each product sold on the platform. This fee is automatically deducted from the selling price.
          </AccordionItem>

          <AccordionItem header="How can I get more information or assistance with SmartWave?">
          For further inquiries about the SmartWave marketplace, you can reach out to support@smartwave.ng. Our team is here to assist you with any questions or concerns.
          </AccordionItem>
        </Accordion>
      </div>


    </div>
  )
}

export default Faq
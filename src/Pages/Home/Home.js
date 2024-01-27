import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Brief from '../../Components/Brief/Brief'
import Feature from '../../Components/Feature/Feature'
import Quick from '../../Components/Quick/Quick'
import Benefit from '../../Components/Benefit/Benefit'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Cta from '../../Components/Cta/Cta'

function Home() {
  return (
    <div>
      <Hero />
      <Brief />
      <Feature />
      <Benefit />
      <Quick />
      <Testimonial />
      <Cta />
  
    </div>
  )
}

export default Home
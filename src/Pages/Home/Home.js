import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Brief from '../../Components/Brief/Brief'
import Feature from '../../Components/Feature/Feature'
import Quick from '../../Components/Quick/Quick'
import Benefit from '../../Components/Benefit/Benefit'

function Home() {
  return (
    <div>
      <Hero />
      <Brief />
      <Feature />
      <Benefit />
      <Quick />
    </div>
  )
}

export default Home
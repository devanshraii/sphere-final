import React from 'react'
import Hero from '../../Components/HomeHero/Hero'
import Services from '../../Components/Services/Services'
import Process from '../../Components/Process/Process'
import Testimonial from '../../Components/Testimonial/Testimonial'
import WhyUs from '../../Components/WhyUS/WhyUs'
import IndustryServices from '../../Components/IndustryService/IndustryServices'
import Faq from '../../Components/FAQ/Faq'
import GenericHero from '../../Generic/GenericHero/GenericHero'
import AIMLimage from '../../Assets/AI_ML 2.svg'

function Home() {
  const imageWidth = '44.306vw'
  const backgroundColor = '#F3E6D3'
  const text = 'Empower your business for the future through automation and intelligent decision-making with our';
  const dualText = 'AI & Machine Learning solutions'
  return (
   <div>
    <Hero />
    <Services />
    <Process/>
    <Testimonial/>
    <WhyUs />
    <IndustryServices />
    {/* <GenericHero sideImage={AIMLimage} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} dualText={dualText} dualColor={true}/> */}
   </div>
  )
}

export default Home
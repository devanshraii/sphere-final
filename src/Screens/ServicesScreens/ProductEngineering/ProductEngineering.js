import React from 'react'
import GenericHero from '../../../Generic/GenericHero/GenericHero'
import ProductEngiHero from '../../../Assets/Product Engineering.svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'
import { servicesData } from '../../../Constants/Data/Data'

function ProductEngi() {
    const imageWidth = '44.306vw'
    const backgroundColor = '#73AAFA'
    const text = 'Vision meets reality Engineering the products for the future';
    const textColor = 'white';
    const backgroundColorLeft = 'white';
    const backgroundColorRight = '#73AAFA';
    const rightColor = 'white';
    const leftColor = '#5D5A88';
  return (
    <>
    {/* <div style={{paddingTop:'13.75vw',backgroundColor:'#73AAFA'}}> */}
    <GenericHero sideImage={ProductEngiHero} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
    {/* </div> */}
    <Offerings servicesData={servicesData.Services['Product Engineering']['Our Offerings']} />
    <Benefits heading="Product Engineering" servicesData={servicesData.Services['Product Engineering']['Benefits']}/>
    <Faq servicesData={servicesData.Services['Product Engineering']['FAQs']}/>
    </>
  )
}

export default ProductEngi
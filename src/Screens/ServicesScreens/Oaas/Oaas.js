import React from 'react'
import GenericHero from '../../../Generic/GenericHero/GenericHero'
import OaasHero from '../../../Assets/OaasHero.svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'
import { servicesData } from '../../../Constants/Data/Data'

function Oaas() {
    const imageWidth = '44.306vw'
    const backgroundColor = '#9966CB'
    const text = 'Driving Digital Transformation through Customized Application Solutions';
    const textColor = 'white';
    const backgroundColorLeft = 'white';
    const backgroundColorRight = '#9966CB';
    const rightColor = 'white';
    const leftColor = '#5D5A88';
  return (
    <>
    <GenericHero sideImage={OaasHero} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
    <Offerings servicesData={servicesData.Services['OaaS Solutions']['Our Offerings']} />
    <Benefits heading="OaaS Solutions" servicesData={servicesData.Services['OaaS Solutions']['Benefits']}/>
    <Faq servicesData={servicesData.Services['OaaS Solutions']['FAQs']}/>
    </>
  )
}

export default Oaas
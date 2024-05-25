import React from 'react'
import GenericHero from '../../../Generic/GenericHero/GenericHero'
import MobileHero from '../../../Assets/MobileHero.svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'
import { servicesData } from '../../../Constants/Data/Data'

function Mobile() {
    const imageWidth = '44.306vw'
    const backgroundColor = '#EBB99E'
    const text = 'Bringing your ideas to life with Cutting-Edge Mobile Solutions';
    const textColor = 'white';
    const backgroundColorLeft = 'white';
    const backgroundColorRight = '#EBB99E';
    const rightColor = 'white';
    const leftColor = '#5D5A88';
  return (
    <>
    <GenericHero sideImage={MobileHero} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
    <Offerings servicesData={servicesData.Services['Mobility']['Our Offerings']} />
    <Benefits heading="Mobility" servicesData={servicesData.Services['Mobility']['Benefits']}/>
    <Faq servicesData={servicesData.Services['Mobility']['FAQs']}/>
    </>
  )
}

export default Mobile
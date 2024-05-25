import React from 'react'
import GenericHero from '../../../Generic/GenericHero/GenericHero'
import DevopsHero from '../../../Assets/DevopsHero.svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'
import { servicesData } from '../../../Constants/Data/Data'

function Devops() {
    const imageWidth = '44.306vw'
    const backgroundColor = '#CC9998'
    const text = 'Streamline, Deploy, Succeed: Your DevOps partner for modern';
    const textColor = 'white';
    const backgroundColorLeft = 'white';
    const backgroundColorRight = '#CC9998';
    const rightColor = 'white';
    const leftColor = '#5D5A88';
  return (
    <>
    <GenericHero sideImage={DevopsHero} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
    <Offerings servicesData={servicesData.Services['DevOps']['Our Offerings']} />
    <Benefits heading="DevOps" servicesData={servicesData.Services['DevOps']['Benefits']}/>
    <Faq servicesData={servicesData.Services['DevOps']['FAQs']}/>
    </>
  )
}

export default Devops
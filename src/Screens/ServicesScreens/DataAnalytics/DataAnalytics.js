import GenericHero from '../../../Generic/GenericHero/GenericHero'
import DataAnalyticsImg from '../../../Assets/AI_ML 2 (1).svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq';
import { servicesData } from '../../../Constants/Data/Data';

function DataAnalytics() {
    const imageWidth = '43.472vw'
    const backgroundColor = '#AFAFAF'
    const text = 'Illuminate your path to success with Data-driven Decisions';
    const textColor = 'white';
    const backgroundColorLeft = '#FFFFFF';
    const backgroundColorRight = '#AFAFAF';
    const rightColor = 'white';
    const leftColor = '#5D5A88';
  return (
    <>
    <GenericHero sideImage={DataAnalyticsImg} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
    <Offerings servicesData={servicesData.Services['Data Analytics and BI']['Our Offerings']} />
    <Benefits heading="Data Analytics and BI" servicesData={servicesData.Services['Data Analytics and BI']['Benefits']}/>
    <Faq servicesData={servicesData.Services['Data Analytics and BI']['FAQs']}/>
    </>
  )
}

export default DataAnalytics
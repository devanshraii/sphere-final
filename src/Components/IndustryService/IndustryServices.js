import React from 'react'
import './IndustryServices.css'
import IndustryCard from '../../Generic/IndustryCard/IndustryCard';
import { Data } from '../../Constants/Data/Data';
import Message from '../../Generic/MessageBox/Message';
import MessageRight from '../../Generic/MessageRight/MessageRight';

function IndustryServices() {
  return (
    <>
    <div className='main-container flex flex-column flex-center'>
        <div>
            <div className='subheading-text text-center'>
                <p>Industries we <span className='focused-color'> Service</span> to</p>
            </div>
            <div className='description-container descriptionColor text'>
                <p>Our enduring goal remains client success through innovation in technology and business. Committed to our clients, we redefine success by seamlessly blending technological prowess to achieve milestones that reflect our client-centric ethos.</p>
            </div>
        </div>
        <div className='flex flex-center flex-wrap list'>
            {
                Data.industryData.map((data)=>(
                   <IndustryCard data={data}/> 
                ))
            }
        </div>
    </div>
    
    
    </>
  )
}

export default IndustryServices
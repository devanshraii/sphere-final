import React from 'react'
import TestimonialCard from '../../Generic/TestimonialCard/TestimonialCard'
import './Testimonial.css';
import { Data } from '../../Constants/Data/Data';

function Testimonial() {
  return (
    <div className='flex flex-column flex-center testimonial'>
      <div className='subheading-text text-center'>
        Passion for <span className='focused-color'>Technology</span> & Customer <span className='focused-color'>Success</span>
      </div>
      <div className='subText text-center text gray-text mb-111 mb-111'>
        Two Decades of a journey and many more to come
      </div>
      <div className='testimoniaContainer flex flex-wrap cardGap'>
        {
          Data.testimonial.map((data)=>(
            <TestimonialCard data={data} />
          ))
        }
        {/* <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard /> */}
      </div>
    </div>
  )
}

export default Testimonial
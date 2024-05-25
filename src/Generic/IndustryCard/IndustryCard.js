import React from 'react';
import './IndustryCard.css';
import Icon from '../../Assets/web-30 (1) 1.svg'

function IndustryCard({data}) {
  return (
    <div className='industryCard flex flex-column flex-center'>
        <div className='industryIcon'>
            <img src={data.icon} alt='icon' />
        </div>
        <div className='font iconTitle text-center'>
            <p>{data.title}</p>
        </div>
    </div>
  )
}

export default IndustryCard
import React from 'react';
import './Button.css';
import RightArrow from '../../Assets/Arrow Right.svg';

function Button({ onClick, backgroundColor, borderColor = '', color, text, arrow }) {
  return (
    <div
      onClick={onClick} 
      style={{ backgroundColor: backgroundColor, border: `0.104vw solid ${borderColor}`, color: color }}
      className='button button-text flex flex-center'
    >
      <p>{text}</p>
      {arrow && ( 
        <div style={{ marginTop: '0.278vw' }}>
          <img className='arrow' src={RightArrow} alt='>' style={{ width: '1.25vw' }} />
        </div>
      )}
    </div>
  );
}

export default Button;

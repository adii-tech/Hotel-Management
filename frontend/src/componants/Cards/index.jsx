import React from 'react';
import './styles.css';


const  Cards = (props) => {

  return (
    <div className='card'>
        <div className='img'>
          {props.element}
        </div>
        <div className='data'>
            <p className='name'>{props.name}</p>
            <h1 className='number'>{props.number}</h1>
        </div>
    </div>
  )
}

export default  Cards;

import React from 'react';

const  SugResults = (props) => {
    return (
        <div>
          <p>TYPE:        {props.type} </p> 
          <p>ACTIVITY:       {props.activity} </p> 
          <p>PRICE:       {props.price} </p> 
          <p>LINK:      {props.link} </p> 
        </div>
    );
}

export default SugResults;
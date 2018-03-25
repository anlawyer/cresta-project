import React from 'react';

export const TextBox = props => (
  <div className='tile is-6 box'>
    <li className='tile'>
      {props.value}
    </li>
  </div>
);

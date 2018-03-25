import React from 'react';

export const Input = props => (
  <input className='input' type='text' placeholder={props.placeholder} {...props} />
);

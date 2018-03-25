import React from 'react';

export const Button = props => (
  <button className='button is-info' type='submit' {...props}>
    {props.children}
  </button>
);

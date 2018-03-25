import React from 'react';

export const Input = props => (
  <div className='field is-grouped'>
    <p className='control is-expanded'>
      <input className='input' type='text' placeholder='Enter response' />
    </p>
    <p className='control'>
      <a className='button is-info'>
        Send
      </a>
    </p>
  </div>
);

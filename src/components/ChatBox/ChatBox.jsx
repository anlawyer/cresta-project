import React from 'react';

export const ChatBox = props => (
  <div className='card'>
    <header className='card-header'>
      <p className='card-header-title'>
        {props.customer}
      </p>
      <a className='card-header-icon'>
        <span className='icon'>
          <i className={props.issueIcon} />
        </span>
      </a>
    </header>
    <div className='card-content'>
      <div className='content'>
        {props.children}
      </div>
    </div>
  </div>
);

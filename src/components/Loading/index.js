import React from 'react';
import './style.scss';

const Loading = () => (
  <div data-testid='loading' className='loading'>
    <div className='preloader'>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
);

export default Loading;

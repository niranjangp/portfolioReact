import React from 'react';
import { Link } from 'react-router-dom';

const csOne = () => {
  return (
    <div className='csOne'>
      <div className="backLink"><Link to="/enter-the-design">{'< Back'}</Link></div>
      <div>cs one app</div>
    </div>
  )
};

export default csOne;

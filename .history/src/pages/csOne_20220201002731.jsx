import React from 'react';
import { Link } from 'react-router-dom';

const csOne = () => {
  return (
    <React.Fragment>
      <div>cs one app</div>
      <div><Link to="/enter-the-design">{'< Back'}</Link></div>
    </React.Fragment>
  )
};

export default csOne;

import React from 'react';
import { Link } from 'react-router-dom';
import MrDesk from '../assets/mrDesk.JPG';
import MrTab from '../assets/mrTab.JPG';
import MrMob from '../assets/mrMob.JPG';

const csOne = () => {
  return (
    <div className='csOne'>
      <div className="backLink"><Link to="/enter-the-design">{'< Back'}</Link></div>
      <div className='csOneHeader'>A Flow for a Mandated Reporter</div>
      <div className='csOneBody'>
        <div className="pd-bt">
          <p className="csOneH">The START -</p>
          <p className="csOneC">This design came out as the first opportunity in my design roadmap.</p>
          <p className="csOneC">The design required a very minimal approach and subtle design feature involving only 3-4 color tones and the common 'sans-serif' font type.</p>
        </div>
        <div className="pd-bt">
          <p className="csOneH">The FEATURES</p>
          <p className="csOneC">The webpage doesn't have fancy animations or transitions, but has a responsive web design supporting large, medium and small device screen sizes.</p>
          <p className="csOneC"><p className='fir clrp'></p> - #0070d2</p>
          <p className="csOneC"><p className='sec clrp'></p> - #16325C</p>
          <p className="csOneC"><p className='thi clrp'></p> - #00437D</p>
          <p class="fou"><p>SANA_SERIF</p> - 'sans-serif'</p>
        </div>
        <div className="pd-bt">
          <p className="csOneH">The PRODUCT</p>
          <div><img src={MrDesk} alt="mr-screen" className='mrDesk' /></div>
          <div><img src={MrTab} alt="mr-screen" className='mrTab' /></div>
          <div><img src={MrMob} alt="mr-screen" className='mrMob' /></div>
        </div>
      </div>
    </div>
  )
};

export default csOne;

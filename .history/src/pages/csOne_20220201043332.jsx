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
          <p className="csOneC dp-flx"><p className='fir clrp'></p><span>{' : #0070d2'}</span></p>
          <p className="csOneC  dp-flx"><p className='sec clrp'></p><span>{' : #16325C'}</span></p>
          <p className="csOneC  dp-flx"><p className='thi clrp'></p><span>{' : #00437D'}</span></p>
          <p className="csOneC  dp-flx"><p className="fou">SANS_SERIF</p><p> - Font</p></p>
        </div>
        <div className="pd-bt">
          <p className="csOneH">The PRODUCT</p>
          <p className="csOneC pd-bt-small">Responsive design accomodating Desktop, Tablet and Mobile versions of the webpage.</p>
          <div className="flx-bx"><img src={MrDesk} alt="mr-screen" className='mrDesk' /><div>Desktop (Large) screen</div></div>
          <div className="flx-bx"><div>Tablet (Medium) screen</div><img src={MrTab} alt="mr-screen" className='mrTab' /></div>
          <div className="flx-bx"><img src={MrMob} alt="mr-screen" className='mrMob' /><div>Mobile (Small) screen</div></div>
        </div>
      </div>
      <div className="last-text">To go back, scroll Up to find the Back button near the top of the screen or use the navigation links to take you to the home page or to the desired webpage!!!</div>
    </div>
  )
};

export default csOne;

import React from 'react';
import Icons from './assets/programmer.png';

const enterDesign = () => {
    const avatarIcon = Icons;
    
    return (
        <React.Fragment>
            <div className='firstRow'>
                <div className="width-60">
                    <p className='fr-info'>NIRANJAN G P, IS A UI DEVELOPER AT DELOITTE USI</p>
                </div>
                <div className="width-40 img-block">
                    <img src={avatarIcon} alt="avatar-icon" className='avtr-img' />
                </div>
            </div>
            <div className='sec-row'>
                <p>Hi, this is Niranjan.</p>
                <p>I Joined Deloitte USI as a campus recruit. Since then I've been part of many innovative and high-intensity projects, coordinating between multiple virtual teams to help complete client deliverables.</p>
                <p>I've been part of the FRONT-END community since 2017 and constantly learning and developing UI and gradually having a go at UX design parallely.</p>
                <p>Currently based in Bengaluru, I have a big love for travel and adventure, also keeping in mind to do my bit to conserve the environment.</p>
                <p>Thanks for stopping by.</p>
            </div>
        </React.Fragment>
    )
};

export default enterDesign;

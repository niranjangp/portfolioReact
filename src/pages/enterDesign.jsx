import React from 'react';
import Icons from '../assets/programmer.png';
import WorkingIcon from '../assets/working.png';
import FoodIcon from '../assets/fruit.png';
import ExpIcon from '../assets/expense.png';
import QuoteIcon from '../assets/quote.png';
import { Link } from 'react-router-dom';


const enterDesign = () => {
    const avatarIcon = Icons;


    return (
        <React.Fragment>
            <div className='firstRow'>
                <div className="width-60">
                    <p className='fr-info'>Niranjan G. P. was a UI developer at Deloitte US India, and now he's pursuing his master's in Human-Computer Interaction at DePaul University.</p>
                </div>
                <div className="width-40 img-block">
                    <img src={avatarIcon} alt="avatar-icon" className='avtr-img' />
                </div>
            </div>
            <div className='sec-row'>
                <p>Hi, this is Niranjan.</p>
                <p>I joined Deloitte as a campus recruit, and this was the beginning of my entry into the world of development and the many wonders of the world wide web. Since then, I've been part of many innovative and high-intensity projects, coordinating between multiple virtual teams to help complete client deliverables.</p>
                <p>I've been part of the FRONT-END community since 2017 and am constantly learning and developing UI, gradually flexing my creative mind through learning the many intricacies of the design ecosystem.</p>
                <p>Currently based in Chicago, IL. I've been pursuing my master's degree at DePaul University in the field of Human-Computer Interaction, which I hope will get me up to speed on how and why design thinking and user research have a bigger part to play in our daily lives involved in virtual and remote participation through the use of various digital technologies.</p>
                <p>The other part of my life has this big love for travel and adventure, and I also keep in mind doing my bit to conserve the environment.</p>
                <p>Thanks for stopping by.</p>
            </div>
            <div className='third-row'>
                <div className='fullWidth intro-cs'>
                    <p>Time to dive deep into some Case Studies, right.</p>
                    <p>Choose one to enter its world!</p>
                </div>
                <div className='card-box'>
                    <div className="card">
                        <Link to="/cs-one">
                            <img src={WorkingIcon} alt="card-icon" className='card-icon' />
                            <p>Mandated Reporter</p>
                            {/*<p>Click to Read More!!!</p>*/}
                        </Link>
                    </div>
                </div>
                <div className='card-box'>
                    <div className="card">
                    <Link to="/cs-two">
                        <img src={FoodIcon} alt="card-icon" className='card-icon' />
                        <p>Order Food</p>
                        </Link>
                    </div>
                </div>
                <div className='card-box'>
                    <div className="card" >
                    <Link to="/cs-three">
                        <img src={ExpIcon} alt="card-icon" className='card-icon' />
                        <p>Expense Tracker</p>
                        </Link>
                    </div>
                </div>
                <div className='card-box'>
                    <div className="card" >
                    <Link to="/cs-four">
                        <img src={QuoteIcon} alt="card-icon" className='card-icon' />
                        <p>If you have a Quote</p>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default enterDesign;

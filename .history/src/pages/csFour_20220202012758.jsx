import React from 'react';
import { Link } from 'react-router-dom';
import QuoHome from '../assets/quoteHome.JPG';
import AddQuo from '../assets/addQuote.JPG';
import CommonScen from '../assets/commScen.JPG';


const csFour = () => {
    return (
        <div className="cs4">
            <div className="backLink"><Link to="/enter-the-design">{'< Back'}</Link></div>
            <div className='cs4Header'>Quotes Repository</div>
            <div className="quo-body">
                <div>
                    <p className="cs4-para">Store all your Famous Quotes and share with your Community.</p>
                    <p className="cs4-para">Add comments to all your quotes.</p>
                </div>
                <div>
                    <div clasName="quo-pack"><img src={QuoHome} alt="quote-home" className="quoIcon" /><div className="">Home of the quotes</div></div>
                    <div clasName="quo-pack"><img src={AddQuo} alt="quote-home" className="quoIcon" /><div>The Add quote page</div></div>
                    <div clasName="quo-pack"><img src={CommonScen} alt="quote-home" className="quoIcon" /><div>Add Comment Scenario</div></div>
                </div>
                <div>
                    <p>The thinking behind this, or the question trying to be answered here is Why a quote page? Simple Answer why not, design can vary from something as small as a small stick to a skyscraper</p>
                    <p>If the question comes down to what are the haves and have-nots, it comes down to repository and features respectively</p>
                    <p>Future steps involve the implementation of the have-nots mentioned above.</p>
                    <p>The outcome is that of a candid UI with features to be liked at a glance.</p>
                    <p>Understood the intricacy of the design thinking process and the non-linearity approach to its outcome.</p>
                </div>
            </div>
        </div>
    )
};

export default csFour;

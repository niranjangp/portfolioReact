import React from 'react';
import { Link } from 'react-router-dom';
//import FoaHome from '../assets/foaHome.JPG';


const csThree = () => {
    return (
        <div className='cs3'>
            <div className="backLink"><Link to="/enter-the-design">{'< Back'}</Link></div>
            <div className='cs3Header'>Expense App we all need!!!</div>

            <div className="last-text">To go back, scroll up to find the Back button near the top of the screen or use the navigation links to take you to the home page or to the desired webpage!!!</div>
        </div>
    )
};

export default csThree;

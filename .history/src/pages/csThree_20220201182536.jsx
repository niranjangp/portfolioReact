import React from 'react';
import { Link } from 'react-router-dom';
import ExpHome from '../assets/expHome.JPG';
import AddExp from '../assets/addExp.JPG';
import SingleExp from '../assets/singleExp.JPG';
import MultiExp from '../assets/multiExp.JPG'


const csThree = () => {
    return (
        <div className='cs3'>
            <div className="backLink"><Link to="/enter-the-design">{'< Back'}</Link></div>
            <div className='cs3Header'>Expense App we all need!!!</div>
            <div className="exp-body">
                <div className="right-content">
                    <p className="exp-para">The Expense Tracker we all need.</p>
                    <p className="exp-para">One App to calculate yearly spends on products and commodities.</p>
                    <p className="exp-para">Get analysis on monthly expenditures calculated based on the highest expense for that year.</p>
                </div>
                <div>
                    <div><img src={ExpHome} alt="expense-home" /></div>
                    <div><img src={AddExp} alt="add-expense" /></div>
                    <div><img src={SingleExp} alt="single-exp" /></div>
                    <div><img src={MultiExp} alt="multi-exp" /></div>
                </div>
                <div>
                    <p className="exp-para">The design is card and container based and darker hues are used for color schemes.</p>
                    <p className="exp-para">App is built using ReactJS, implementing CSS design guidelines too.</p>
                </div>
            </div>
            <div className="last-text">To go back, scroll up to find the Back button near the top of the screen or use the navigation links to take you to the home page or to the desired webpage!!!</div>
        </div>
    )
};

export default csThree;

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
                    <div className="exp-header">Working View</div>
                    <div className="flexExp"><div className="iconText">The Home Page of the Expense app to add and view expense details.</div><img src={ExpHome} alt="expense-home" className="expIcon"/></div>
                    <div className="flexExp"><div className="iconText">The details to be filled include the name of the expense, the amount and the date of the expense incurred.</div><img src={AddExp} alt="add-expense"  className="expIcon" /></div>
                    <div className="flexExp"><div className="iconText">Screen when there is only one Expense entry for a particular month, capturing the when, how much and the monthly chart of the expenses captured.</div><img src={SingleExp} alt="single-exp" className="expIcon" /></div>
                    <div className="flexExp"><div className="iconText">Screen when multiple expense items are entered with the highest amount in a particular month accounted in a year to be the highest amount in the chart, unless overwritten by any future expenses exceeding the previous highest amount. The subsequent monthly expense details captured are based on the highest month and fill the chart appropriately.</div><img src={MultiExp} alt="multi-exp" className="expIcon" /></div>
                </div>
                <div className="right-content last">
                    <p className="exp-para">The design is card and container based and darker hues are used for color schemes.</p>
                    <p className="exp-para">App is built using ReactJS, implementing CSS design guidelines too.</p>
                    <p className="exp-para">Many overlook the fact to track their expenditure, and this solution helps them in a way.</p>
                    <p className="exp-para">The known to this story is the tracking model and the unknown could be the integration of payment methods to track or update live status.</p>
                    <p className="exp-para">Further working on the tracking and payment integration, the interface and experience of the app will be enhanced drastically.</p>
                    <p className="exp-para">Takeaway - Understanding the varied nuances of the  lifecycle of a product and its implementation has been the key takeaway from this design model.</p>
                </div>
            </div>
            <div className="last-text">To go back, scroll up to find the Back button near the top of the screen or use the navigation links to take you to the home page or to the desired webpage!!!</div>
        </div>
    )
};

export default csThree;

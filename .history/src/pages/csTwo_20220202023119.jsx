import React from 'react';
import { Link } from 'react-router-dom';
import FoaHome from '../assets/foaHome.JPG';
import AddFood from '../assets/addDetFoa.JPG';
import CartDet from '../assets/cartDet.JPG';
import SuccFoa from '../assets/successFoa.JPG';


const csTwo = () => {
    return (
        <div className='csTwo'>
            <div className="backLink"><Link to="/enter-the-design">{'< Back'}</Link></div>
            <div className='csTwoHeader'>The Food Order App</div>
            <div className="csTwoBody">
                <div className="padd-div">
                    <p className="csTwoPara">A sample Food order app, which displays the list of food items available and can be added on to our food cart.</p>
                    <p className="csTwoPara">Order can be customized from the food details(home) screen or from the cart details popup.</p>
                    <p className="csTwoPara">Once the user clicks on order, the user gets to enter details of the delivery location and then can click on submit to confirm the food order.</p>
                </div>
                <div className="padd-div">
                    <div className="csTwoRowTwo">Design Implementation</div>
                    <div className="textCen"><div className="screenName">Food Order Home</div><img src={FoaHome} alt="food-app"  className="scrIcon"/></div>
                    <div className="textCen"><div className="screenName">Add Food Details</div><img src={AddFood} alt="food-app" className="scrIcon"/></div>
                    <div className="textCen"><div className="screenName">Cart details as a Popup</div><img src={CartDet} alt="food-app" className="scrIcon"/></div>
                    <div className="textCen"><div className="screenName">Order Success screen</div><img src={SuccFoa} alt="food-app" className="scrIcon"/></div>
                </div>
                <div className="padd-div">
                    <div className="csTwoRowTwo">Features & Design Gaps</div>
                    <p className="csTwoPara">App is built based on the front end framework ReactJS.</p>
                    <p className="csTwoPara">The app incorporates CSS with bootstrap(grid structure), card, and container design and also overlay features based on user interaction with the app.</p>
                    <p className="csTwoPara">A simple Food order app for the school/college canteen, would be the purpose of the Why?, question.</p>
                    <p className="csTwoPara">The resources at hand would be of the meal catalogue and the understanding of the entire food order lifecycle. The unknowns would comprise of a real time update of the available meals and the integration of ETA of the ordered food.</p>
                    <p className="csTwoPara">Integration of multiple restaurants to cater to different needs of the user is a key feature which would be a great add-on.</p>
                    <p className="csTwoPara">Takeaway - Good opportunity to understand the non-linearity of the overall design process.</p>
                    
                </div>

            </div>
            <div className="last-text">To go back, scroll up to find the Back button near the top of the screen or use the navigation links to take you to the home page or to the desired webpage!!!</div>
        </div>
    )
};

export default csTwo;

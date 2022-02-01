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
                <div>
                    <div><div>Food Order Home</div><img src={FoaHome} alt="food-app"/></div>
                    <div><div>Add Food Details</div><img src={AddFood} alt="food-app"/></div>
                    <div><div>Cart details as a Popup</div><img src={CartDet} alt="food-app"/></div>
                    <div><div>Order Success screen.</div><img src={SuccFoa} alt="food-app"/></div>
                </div>
                <div>
                    <p className="csTwoPara">App is built based on the front end framework ReactJS.</p>
                    <p className="csTwoPara">The app incorporates CSS with bootstrap(grid structure), card, and container design and also overlay features based on user interaction with the app.</p>
                    <p className="csTwoPara">Integration on adding maps to display current location of the food order is in-progress</p>
                    <p className="csTwoPara">Integration of multiple restaurants to cater to different needs of the user is a key feature which is in-progress.</p>
                </div>

            </div>
            <div className="last-text">To go back, scroll up to find the Back button near the top of the screen or use the navigation links to take you to the home page or to the desired webpage!!!</div>
        </div>
    )
};

export default csTwo;

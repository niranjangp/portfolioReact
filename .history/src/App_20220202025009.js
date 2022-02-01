import './App.css';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import EnterTheDesign from './pages/enterDesign';
import CSOne from './pages/csOne';
import CSTwo from './pages/csTwo';
import CSThree from './pages/csThree';
import CSFour from './pages/csFour';
import NotFound from './pages/notFound';

function App() {
  const flatIconLink = "https://www.flaticon.com/free-icons/programmer";
  const wfhIconLink = "https://www.flaticon.com/free-icons/work-from-home";
  const fruitLink = "https://www.flaticon.com/free-icons/fruit";
  const moneyLink = "https://www.flaticon.com/free-icons/digital-money";
  const quoteLink = "https://www.flaticon.com/free-icons/question-mark";



  return (
    <div className='App'>
      <div className="containerOne">
        <nav className='navigation'>
          <div className='navDiv'>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/enter-the-design">Take me Home!</NavLink>
          </div>
          <div className='navDiv'>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/cs-one">Case Study Numero Uno</NavLink>
          </div>
          <div className='navDiv'>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/cs-two">Case t'w'o Study</NavLink>
          </div>
          <div className='navDiv'>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/cs-three">Case Study the 3rd</NavLink>
          </div>
          <div className='navDiv'>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/cs-four">Case Study IV</NavLink>
          </div>
        </nav>
        <main className='mainOne'>
          <Switch>
            <Route exact path="/" ><Redirect to="/enter-the-design" /></Route>
            <Route path="/enter-the-design" ><EnterTheDesign /></Route>
            <Route exact path="/cs-one" ><CSOne /></Route>
            <Route exact path="/cs-two" ><CSTwo /></Route>
            <Route exact path="/cs-three"><CSThree /></Route>
            <Route exact path="/cs-four"><CSFour /></Route>

            <Route path="*"><NotFound /></Route>
          </Switch>

        </main>
        <footer>
          <div className='footer-info'>
            {/*<p>Niranjan G P</p>*/}
            <p>Design & Develop    |   mailtonirgp@gmail.com</p>
            <p>Please consider the Environment while printing.</p>
          </div>
          <div className='credits'>
            <p>Icons from Flaticons</p>
            <a href={flatIconLink} title="programmer icons">Programmer icons created by Flat Icons - Flaticon</a>
            <a href={wfhIconLink} title="work from home icons">Work from home icons created by Freepik - Flaticon</a>
            <a href={fruitLink} title="fruit icons">Fruit icons created by Freepik - Flaticon</a>
            <a href={moneyLink} title="digital money icons">Digital money icons created by Freepik - Flaticon</a>
            <a href={quoteLink} title="question mark icons">Question mark icons created by Freepik - Flaticon</a>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import Icons from './assets/programmer.png'; 

function App() {
  //const avatarLink = "https://icons8.com/icon/vNgOPqTtRSta/avatar";
  //const icon8link = "https://icons8.com";
  const flatIconLink = "https://www.flaticon.com/free-icons/programmer";
  const avatarIcon = Icons;

  return (
    <div className='App'>
      <div className="containerOne">
        <main className='mainOne'>
            <div className='firstRow'>
                <div className="width-60">
                  <p className='fr-info'>NIRANJAN G P IS A UI DEVELOPER AT DELOITTE USI</p>
                </div>
                <div className="width-40 img-block">
                  <img src={avatarIcon} alt="avatar-icon" className='avtr-img' />
                </div>
            </div>
            <div className='sec-row'>
              <p>Hi, this is Niranjan</p>
              <p>I Joined Deloitte USI as a campus recruit. Since then I've been part of many innovative and high-intensity projects, coordinating between multiple virtual teams to help complete client deliverables.</p>
            </div>
          
        </main>
        <footer>
            <div className='footer-info'>
              <p>Niranjan G P</p>
              <p>Design & Develop</p>
              <p>Please consider the Environment while printing.</p>
            </div>
            <div>
              <a href={flatIconLink} title="programmer icons">Programmer icons created by Flat Icons - Flaticon</a>
              {/*<a target="_blank" rel="noopener noreferrer" href={avatarLink}>Avatar</a> icon by <a target="_blank" rel="noopener noreferrer" href={icon8link}>Icons8</a>*/}
            </div>
          </footer>
      </div>

    </div>
  );
}

export default App;

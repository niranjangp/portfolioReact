import './App.css';
import Icons from './assets/avatar.png'; 

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
                <div>
                  <p className='fr-info'>Niranjan G P is a UI Developer at Deloitte USI</p>
                </div>
                <div>
                  <img src={avatarIcon} alt="avatar-icon" className='avtr-img' />
                </div>
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

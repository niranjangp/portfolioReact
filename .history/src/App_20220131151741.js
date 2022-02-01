import './App.css';
import Icons from './assets/'; 

function App() {
  const avatarLink = "https://icons8.com/icon/vNgOPqTtRSta/avatar";
  const icon8link = "https://icons8.com";
  const avatarIcon = Icons + 'avatar.png';

  return (
    <div className='App'>
      <div className="containerOne">
        <main className='mainOne'>
            <div className='firstRow'>
                <div>

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
              <a target="_blank" rel="noopener noreferrer" href={avatarLink}>Avatar</a> icon by <a target="_blank" rel="noopener noreferrer" href={icon8link}>Icons8</a>
            </div>
          </footer>
      </div>

    </div>
  );
}

export default App;

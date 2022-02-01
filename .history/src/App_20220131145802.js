import './App.css';

function App() {
  const avatarLink = "https://icons8.com/icon/vNgOPqTtRSta/avatar";
  const icon8link = "https://icons8.com";

  return (
    <div className='App'>
      <div className="containerOne">
        <main className='mainOne'>
            <p classname="p1">dcfdfsdfsdrfsfsdvsefzd dcfwe adcfcfcfcfw</p>
            <p classname="p2">fdsews csdcsewfec dcwcdas</p>
          
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

import React from 'react';
import logo from './logo.svg';
import './App.css';
import './theme'
function App(this: any) {
  // const green = "#39D1B4";
  // const yellow = "#FFD712";
  // const [buttonColor, setButtonColor] = useState(green);

  function handleColorChange(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    console.log(e)
    // const button = e.target.style.backgroundColor;
    // const newButton = e.target.style.backgroundColor;
    console.error(e)
    
    // const newColor = buttonColor === green ? yellow : green;
    var body = document.getElementsByClassName("App")[0];
    body.classList.toggle('dark');
    body.classList.toggle('light');
  }
  return (
    <div className="App dark">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Accessible Color Palette Generator
        </p>

        <p>
          <label>
            <input type="checkbox" id="toggle" onClick={(e) => handleColorChange(e)}/> Toggle Dark
          </label>
        </p>
       
        <div className="swatches">
          <span className='swatch bg-primary'>Primary</span>
          <span className='swatch bg-info'>Info</span>
          <span className='swatch bg-warning'>Warning</span>
          <span className='swatch bg-danger'>Danger</span>
        </div>

        <fieldset className="fieldset"><legend>Context Colors</legend></fieldset>


        <div className="swatches">
          <span className='swatch bg-primary-light'>Primary Light</span>
          <span className='swatch bg-primary'>Primary</span>
          <span className='swatch bg-primary-dark'>Primary Dark</span>
        </div>
        <div className="swatches">
          <span className='swatch bg-info-light'>Info Light</span>
          <span className='swatch bg-info'>Info</span>
          <span className='swatch bg-info-dark'>Info Dark</span>
        </div>
        <div className="swatches">
          <span className='swatch bg-warning-light'>Warning Light</span>
          <span className='swatch bg-warning'>Warning</span>
          <span className='swatch bg-warning-dark'>Warning Dark</span>
        </div>
        <div className="swatches">
          <span className='swatch bg-danger-light'>Danger Light</span>
          <span className='swatch bg-danger'>Danger</span>
          <span className='swatch bg-danger-dark'>Danger Dark</span>
        </div>

        <fieldset className="fieldset"><legend>Accent Colors</legend></fieldset>

        <div className="swatches">
          <span className='swatch bg-accent-blue-light'>Accent Blue Light</span>
          <span className='swatch bg-accent-blue'>Accent Blue</span>
          <span className='swatch bg-accent-blue-dark'>Accent Blue Dark</span>
        </div>
        <div className="swatches">
          <span className='swatch bg-accent-orange-light'>Accent Orange Light</span>
          <span className='swatch bg-accent-orange'>Accent Orange</span>
          <span className='swatch bg-accent-orange-dark'>Accent Orange Dark</span>
        </div>

        <div className="swatches">
          <span className='swatch bg-accent-purple-light'>Accent Purple Light</span>
          <span className='swatch bg-accent-purple'>Accent Purple</span>
          <span className='swatch bg-accent-purple-dark'>Accent Purple Dark</span>
        </div>
       
      </header>
    </div>
  );
}

export default App;



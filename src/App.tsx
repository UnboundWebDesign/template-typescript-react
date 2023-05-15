import React from 'react';
import logo from './logo.svg';
import './App.css';
import './theme'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Accessible Color Palette Generator
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="swatches">
          <span className='swatch bg-primary'>Primary</span>
          <span className='swatch bg-info'>Info</span>
          <span className='swatch bg-warning'>Warning</span>
          <span className='swatch bg-danger'>Danger</span>
        </div>
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
       
      </header>
    </div>
  );
}

export default App;

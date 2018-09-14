import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Header from './components/header';
import Navbar from './components/navbar';
import Facebook from '../public/facebook.png'
import Instagram from '../public/instagram.png';

const App = ({children}) => {
  return (
    <div>
      <div className="hide">Posada La Manuel Lobo, Colonia Uruguay</div>
      <Header />
      <Navbar />
      <div className="container">
        {children}
      </div>
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <p>
                    Copyright &copy; La Manuel Lobo || Colonia del Sacramento.
                    <span style={{ paddingLeft: '35px' }}>
                      <a href="https://www.facebook.com/lamanuelloboposada" target="_blank" rel="noopener">
                        <img className="logo-fb" src={Facebook} alt="facebook" />
                      </a>
                      <a href="https://www.instagram.com/lamanuelloboposada" target="_blank" rel="noopener" >
                        <img className="logo-ig" src={Instagram} alt="instagram" />
                      </a>
                    </span>
                    </p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

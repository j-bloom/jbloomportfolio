import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Home from './components/Home';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className='nav__menu'>
        <HashLink smooth to='#intro' className='nav__btn'>
          Welcome
        </HashLink>
        <HashLink smooth to='#technology' className='nav__btn'>
          Technologies I use
        </HashLink>
        <HashLink smooth to='#about' className='nav__btn'>
          About Me
        </HashLink>
        <HashLink smooth to='#footer' className='nav__btn'>
          Contact Me
        </HashLink>
      </div>
      <div className="App">

        {/* Introduction section */}
        <section className="intro" id="intro">
          <Home />
        </section>

        {/* My Technologies Section */}
        <section className="my-technologies" id="technology">
          <Technologies />
        </section>

        {/* About Me Section */}
        <section className='about' id='about'>
          <About />
        </section>

        {/* Footer Section */}
        <footer className="footer" id='footer'>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

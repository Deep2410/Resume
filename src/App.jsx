import React, { useState } from 'react';
import './App.css';
import Contact from './components/contact';
import Home from './components/home';
import Resume from './components/resume';
import Projects from './components/projects';

function App() {
  const [activeModule, setActiveModule] = useState('home');
  const [navbarStatus, setNavbarStatus] = useState(false);

  const setActive = (module) => {
    document.querySelector('#'+activeModule).classList.remove('active');
    document.querySelector('#'+module).classList.add('active');
    setActiveModule(module);
    setNavbarStatus(false);
  };

  const openNavbar = () => {
    setNavbarStatus(true);
  };

  const closeNavbar = () => {
    setNavbarStatus(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Mobile device navabar */}
          <div className="small_sidebar">
            <div className="small-left">
              <h4>Deep Prajapati</h4>
            </div>
            <div className="small-right">
              <div className="navbar-toggle-icon" onClick={openNavbar}>
                <i className="bi bi-list"></i>
              </div>
            </div>
          </div>
          <div className={`col-sm-3 sidebar ${navbarStatus ? 'openNav' : 'closedNav'}`}>
            <div className="close_navbar_btn" onClick={closeNavbar}><i class="bi bi-x-lg"></i></div>
            <div className="heading-container">
              <h1 className="heading">Deep Prajapati</h1>
              <p className="subheading">Full Stack Developer</p>
            </div>
            <div className="sections-container">
              <div className="row mt-2 section p-2 active" id="home" onClick={() => setActive('home')}>
                <div className="col-1"><i className="bi bi-person-circle"></i></div>
                <div className="col"><h5>About Me</h5></div>
              </div>
              <div className="row mt-2 section p-2" id="resume" onClick={() => setActive('resume')}>
                <div className="col-1"><i className="bi bi-file-earmark-person"></i></div>
                <div className="col"><h5>Resume</h5></div>
              </div>
              <div className="row mt-2 section p-2" id="projects" onClick={() => setActive('projects')}>
                <div className="col-1"><i className="bi bi-file-earmark-code"></i></div>
                <div className="col"><h5>Projects</h5></div>
              </div>
              <div className="row mt-2 section p-2" id="contact" onClick={() => setActive('contact')}>
                <div className="col-1"><i className="bi bi-envelope-at"></i></div>
                <div className="col"><h5>Contact Me</h5></div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 components_container">
            {activeModule === 'contact' && <Contact />}
            {activeModule === 'home' && <Home />}
            {activeModule === 'resume' && <Resume />}
            {activeModule === 'projects' && <Projects />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


import React, { useState, useEffect } from 'react'
import './App.css'
import Contact from './components/contact';
import Home from './components/home';
import Resume from './components/resume';
import Projects from './components/projects';

function App() {
  const [activeModule, setActiveModule] = useState('home');

  const setActive = (module) => {
    document.querySelector('#'+activeModule).classList.remove('active');
    document.querySelector('#'+module).classList.add('active');
    setActiveModule(module);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 sidebar">
            <div className="heading-container">
              <h1 className='heading'>Deep Prajapati</h1>
              <p className='subheading'>Full Stack Developer</p>
            </div>

            <div className="sections-container">
              <div className="row ">
                <div className="col">
                  <h5 className='section p-2 active' id='home' onClick={() => setActive('home')}>Home</h5>  
                </div>  
              </div>  
              <div className="row mt-2">
                <div className="col">
                  <h5 className='section p-2' id='resume' onClick={() => setActive('resume')} >Resume</h5>  
                </div>  
              </div>  
              <div className="row mt-2">
                <div className="col">
                  <h5 className='section p-2' id='projects' onClick={() => setActive('projects')}>Projects</h5>  
                </div>  
              </div>  
              <div className="row mt-2">
                <div className="col">
                  <h5 className='section p-2' id='contact' onClick={() => setActive('contact')}>Contact Information</h5>  
                </div>  
              </div>  
                
            </div>
          </div>
          <div className="col-sm-9">            
            {activeModule === 'contact' && <Contact />}
            {activeModule === 'home' && <Home />}
            {activeModule === 'resume' && <Resume />}
            {activeModule === 'projects' && <Projects />}

          </div>
        </div>
      </div>
    </>
  )
}

export default App

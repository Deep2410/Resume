// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Contact from './components/contact';
// import Home from './components/home';
// import Resume from './components/resume';
// import Projects from './components/projects';
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Authentication from './components/Authentication';

// function App() {
//   const [navbarStatus, setNavbarStatus] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   const openNavbar = () => {
//     setNavbarStatus(true);
//   };

//   const closeNavbar = () => {
//     setNavbarStatus(false);
//   };

//   const setActive = (activestate) => {
//     document.querySelector('#'+activeSection).classList.remove('active');
//     setActiveSection(activestate);
//     document.querySelector('#'+activestate).classList.add('active');
//     closeNavbar();
//   }


//   return (
//     <>
    
//       <div className="container-fluid">
//         <div className="row">
//           {/* Mobile device navabar */}
//           <div className="small_sidebar">
//             <div className="small-left">
//               <h4>Deep Prajapati</h4>
//             </div>
//             <div className="small-right">
//               <div className="navbar-toggle-icon" onClick={openNavbar}>
//                 <i className="bi bi-list"></i>
//               </div>
//             </div>
//           </div>
//           <div className={`col-sm-3 sidebar ${navbarStatus ? 'openNav' : 'closedNav'}`}>
//             <div className="close_navbar_btn" onClick={closeNavbar}><i class="bi bi-x-lg"></i></div>
//             <div className="heading-container">
//               <h1 className="heading">Deep Prajapati</h1>
//               <p className="subheading">Full Stack Developer</p>
//             </div>
//             <div className="sections-container">
//               <Link className="row mt-2 section p-2 active" id="home" to= '/' onClick={() => setActive('home')}>
//                 <div className="col-1"><i className="bi bi-person-circle"></i></div>
//                 <div className="col"><h5>About Me</h5></div>
//               </Link>
//               <Link className="row mt-2 section p-2" id="resume" to= '/resume' onClick={() => setActive('resume')}>
//                 <div className="col-1"><i className="bi bi-file-earmark-person"></i></div>
//                 <div className="col"><h5>Resume</h5></div>
//               </Link>
//               <Link className="row mt-2 section p-2" id="projects" to= '/projects' onClick={() => setActive('projects')}>
//                 <div className="col-1"><i className="bi bi-file-earmark-code"></i></div>
//                 <div className="col"><h5>Projects</h5></div>
//               </Link>
//               <Link className="row mt-2 section p-2" id="contact" to= '/contact' onClick={() => setActive('contact')}>
//                 <div className="col-1"><i className="bi bi-envelope-at"></i></div>
//                 <div className="col"><h5>Contact Me</h5></div>
//               </Link>
//             </div>
//           </div>
//           <div className="col-sm-9 components_container">
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route path='/resume' element = {<Resume />} />
//               <Route path='/projects' element = {<Projects />} />
//               <Route path='/contact' element = {<Contact />} />
//               <Route path='/projects/auth' element = {<Authentication />} />
//             </Routes>

//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './components/contact';
import Home from './components/home';
import Resume from './components/resume';
import Projects from './components/projects';
import {Routes, Route, Link, useLocation } from 'react-router-dom';
import Authentication from './components/Authentication';
import Signup from './components/signup';

function App() {
  return (
    
      <AppContent />
    
  );
}
function AppContent() {
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1] || 'home';
    setActiveSection(currentPath);
  }, [location.pathname]);

  const openNavbar = () => {
    setNavbarStatus(true);
  };

  const closeNavbar = () => {
    setNavbarStatus(false);
  };

  const setActive = (activestate) => {
    setActiveSection(activestate);
    closeNavbar();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Mobile device navbar */}
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
            <div className="close_navbar_btn" onClick={closeNavbar}>
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="heading-container">
              <h1 className="heading">Deep Prajapati</h1>
              <p className="subheading">Full Stack Developer</p>
            </div>
            <div className="sections-container">
              <Link
                className={`row mt-2 section p-2 ${activeSection === 'home' ? 'active' : ''}`}
                id="home"
                to="/"
                onClick={() => setActive('home')}
              >
                <div className="col-1">
                  <i className="bi bi-person-circle"></i>
                </div>
                <div className="col">
                  <h5>About Me</h5>
                </div>
              </Link>
              <Link
                className={`row mt-2 section p-2 ${activeSection === 'resume' ? 'active' : ''}`}
                id="resume"
                to="/resume"
                onClick={() => setActive('resume')}
              >
                <div className="col-1">
                  <i className="bi bi-file-earmark-person"></i>
                </div>
                <div className="col">
                  <h5>Resume</h5>
                </div>
              </Link>
              <Link 
                className={`row mt-2 section p-2 ${activeSection === 'projects' ? 'active' : ''}`}
                id="projects"
                to="/projects"
                onClick={() => setActive('projects')}
              >
                <div className="col-1">
                  <i className="bi bi-file-earmark-code"></i>
                </div>
                <div className="col">
                  <h5>Projects</h5>
                </div>
              </Link>
              <Link
                className={`row mt-2 section p-2 ${activeSection === 'contact' ? 'active' : ''}`}
                id="contact"
                to="/contact"
                onClick={() => setActive('contact')}
              >
                <div className="col-1">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <div className="col">
                  <h5>Contact Me</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-9 components_container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/auth" element={<Authentication />} />
              <Route path="*" element={<div>Page Not Found</div>} />
              <Route path='/projects/auth/signup' element = {<Signup />}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
import React from 'react';
import ResumePath from '../assets/Resume.pdf';
import '../css/resume.css';

function Resume() {
    return (
        <>
            <div className="container card shadow-lg resume_container">
                
                <div className="text-center mb-4 resume_section_1">
                    <h1 className="fw-bold">Deep Prajapati</h1>
                    <p className='m-0'>dm.prajapati8585@gmail.com</p>
                    <p className='mb-2'>+1 (437) 335-2299</p>
                    <p>
                        <a href="https://linkedin.com/in/deep-prajapati-171874155/" target="_blank" className="text-decoration-none me-2">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a> |{' '}
                        <a href="https://github.com/Deep2410" target="_blank" className="text-decoration-none ms-2">
                            <i className="fab fa-github"></i> GitHub
                        </a> |{' '}
                        <a
                            href={ResumePath}
                            download
                            className="text-decoration-none ms-2"
                        >
                            Download
                        </a>
                    </p>
                </div>

                <div className="mb-5">
                    <h2 className="fw-bold mb-4">Skills</h2>
                    <ul className="list-group">
                        <li className="list-group-item">JavaScript, HTML, CSS, PHP, C, Java, C#, SQL</li>
                        <li className="list-group-item">React.js, Node.js, Express.js, WordPress, jQuery, Bootstrap</li>
                        <li className="list-group-item">MongoDB, MySQL</li>
                        <li className="list-group-item">Problem Solving, UX/UI Optimization, Customer-Centric Development</li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h2 className="fw-bold mb-4">Education</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h5 className="fw-bold">Full Stack Software Development | Lambton College, Toronto, ON</h5>
                            <p className="text-muted">September 2023 – May 2025</p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="fw-bold">Bachelor of Engineering in Information Technology | SVIT, Vasad, Gujarat, India</h5>
                            <p className="text-muted">July 2017 – July 2021</p>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h2 className="fw-bold mb-4">Experience</h2>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Front End Developer | Alian Software, Anand, Gujarat, India</h5>
                            <h6 className="card-subtitle mb-2 text-muted">September 2022 – March 2023</h6>
                            <ul>
                                <li>Delivered responsive, reusable web components using React.js and Bootstrap, achieving a 30% reduction in load times and a 15% increase in user engagement.</li>
                                <li>Customized WordPress websites, leading to a 20% increase in site traffic and a 25% boost in conversion rates for e-commerce clients.</li>
                                <li>Presented technical solutions and project updates to clients, improving client satisfaction by 40%.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Front End Developer | SKILLCODEHUB, Vadodara, Gujarat, India</h5>
                            <h6 className="card-subtitle mb-2 text-muted">October 2021 – June 2022</h6>
                            <ul>
                                <li>Designed and implemented front end components using React.js, optimizing site functionality and enhancing user interaction.</li>
                                <li>Increased site load speed by 20% through responsive UI/UX optimization.</li>
                                <li>Collaborated with team members to resolve issues and present progress during weekly reviews.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <h2 className="fw-bold mb-4">Projects</h2>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">E-commerce Website using React.js and Bootstrap</h5>
                            <ul>
                                <li>Developed a fully responsive e-commerce platform with key features like product management and cart functionality.</li>
                                <li>Utilized React hooks for state management and performance optimization, achieving a 90% PageSpeed score and a 15% increase in user engagement.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">To-Do List Application</h5>
                            <ul>
                                <li>Developed a task management app in React.js with real-time task updates like add, edit, delete, and mark as complete.</li>
                                <li>Integrated Node.js and MongoDB for secure user authentication and task management.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;

import React from 'react';
import '../css/home.css';
import profile from '../assets/Profile_croped.jpg';

function Home() {
    return (
        <div className='card home_container shadow-lg'>
            <div className="container text-center">
                <div className="header mb-5">
                    <img src={profile} className='profile_pic mb-4' alt="Profile photo" />
                    <h2 className="fw-bold">Hello, I'm Deep Prajapati</h2>
                    <h5 className="text-muted">Full Stack Software Developer</h5>
                    {/* <p className='mt-3'>
                        Focused on creating exceptional web applications.
                    </p> */}
                </div>
                
                <div className="intro mt-5">
                    <h4 className="fw-bold">About Me</h4>
                    <p className="mt-4 text-justify">
                        I have over a year of professional experience, primarily in front-end development, where I create responsive, user-centric applications using React.js, HTML, CSS, and Bootstrap. Additionally, I have a solid understanding of back-end frameworks like Node.js and databases such as MongoDB and MySQL.
                    </p>
                    {/* <p className="text-justify">
                        I am currently seeking co-op opportunities for Winter 2025 (January to April) to further refine my skills and contribute to cutting-edge web projects.
                    </p> */}
                </div>
            </div>
        </div>
    );
}

export default Home;

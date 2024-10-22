import React from 'react'
import '../css/home.css'
import profile from '../assets/Profile_croped.jpg';

function Home(){
    return(
        <div className='card home_container pt-5'>
            <div className="container">
                <div className="header">
                    <img src={profile} className='profile_pic' alt="Profile photo" />
                    <h3 className='mt-5'>Hello, I am Deep Prajapati, a Full Stack Software Developer focused on creating exceptional web applications</h3>
                </div>
                
                <div className="intro mt-5">
                    <h5>I have over a year of professional experience, primarily in front-end development, where I create responsive, user-centric applications using React.js, HTML, CSS, and Bootstrap. Additionally, I have a solid understanding of back-end frameworks like Node.js and databases such as MongoDB and MySQL. I am currently seeking co-op opportunities for Winter 2025 (January to April) to further refine my skills and contribute to cutting-edge web projects.</h5>
                </div>
            </div>
            

        </div>
    )

}

export default Home
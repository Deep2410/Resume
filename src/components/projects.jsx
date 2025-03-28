import React from 'react'
import '../css/projects.css'
import { Link } from 'react-router-dom';

function Projects(){
    return(
        <>
       
            <div className="container card shadow-lg project_container">
                <div className="row projects_row">
                    <h1 className='text-center fw-bold'>Projects</h1>
                </div>
                <div className="row projects_row">
                    <div className="col-sm-12 col-md-6 ">
                        <div className="container-fluid card shadow-sm project_card">
                            <p><Link to='/projects/auth' className='project_link'>
                                <div className='project_name'>
                                    <i class="bi bi-person-fill-lock mr-5"></i>Authentication
                                </div>
                                
                                </Link></p>
                        </div>
                    </div>                    
                    <div className="col-sm-12 col-md-6 display-small">
                        <div className="container-fluid card shadow-sm project_card">
                            <p>Under Development</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Projects
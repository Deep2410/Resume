import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login_home(){

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/projects/auth');
    }
    return(
        <>
            This is the log in home page<br></br>
            <button onClick={logout} className='btn btn-primary'> Log out</button>
        </>
    )
}

export default Login_home;
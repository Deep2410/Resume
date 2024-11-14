import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Login_home(){
    const navigate = useNavigate();
    const location = useLocation();
    const user_id = location.state?.user_id;
    const [userData, setUserData] = useState(null);
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/projects/auth');
    }

    useEffect(() => {
    
        const fetchUserData = async () => {
            try {
                if (user_id) {
                    // Await the axios request
                    // http://localhost:8000/user/${user_id}
                    // https://resume-backend-9i7r.onrender.com/user/${user_id}
                    const response = await axios.get(`https://resume-backend-9i7r.onrender.com/user/${user_id}`);
                    setUserData(response.data);
                }
            } catch (error) {
                console.error(`Error in fetching user data: ${error}`);
            }
        };

        fetchUserData();
    },[user_id]);

    
    return(
        <>
            This is the log in home page<br></br>
            UserId: {user_id}<br></br>
            {userData ? (
                <>
                    <div>User Name: {userData.name}</div>
                    <div>User Email: {userData.email}</div>
                </>
            ) : (
                <div>Loading user data...</div>
            )}
            <button onClick={logout} className='btn btn-primary'> Log out</button>
        </>
    )
}

export default Login_home;
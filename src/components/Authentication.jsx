import React, {useState, useEffect} from 'react';
import '../css/authentication.css'

function Authentication() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        
    }

    return(
        <>  
            <div className="bg-light d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-sm form_container">
                    <h2 className="text-center mb-4 login_heading">Login</h2>
                    <form autoComplete='off'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                onChange={(e) => {setEmail(e.target.value)}}
                                value={email}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                onChange={(e) => {setPassword(e.target.value)}}
                                value={password}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="button" onClick={login} className="btn btn-primary">Login</button>
                        </div>
                        <div className="mt-3 text-center">
                            <a href="" className="text-decoration-none">New User? Register here</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Authentication;
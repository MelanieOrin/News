import React, { useState } from 'react';
import './Login.css';
import { isLoggedIn } from '../../utils/Auth.js';


const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', user.username);
        localStorage.setItem('password', user.username);
        if (isLoggedIn()) {
            window.location.replace("/")
        }
    }

    return (
        <div className="login">
            <h2>Login for today's top stories</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" className="inputBx" onChange={handleChange} value={user.username} placeholder="Enter at least 1 alphanumeric character" required />
                </div>
                <div>
                    <label className="password">Password: </label>
                    <input type="text" name="password" className="inputBx" onChange={handleChange} value={user.password} placeholder="Enter at least 1 alphanumeric character" required />
                </div>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>)
};

export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';


import './Login.css'; // Import your CSS file

const Login=() => {
    let nav = useNavigate();
    return (
        <div className="container1">
            <h2>AGRI INSURE Login</h2>
            <form>
                <div className="form-group1">
                    <label htmlFor="loginID">Login ID</label>
                    <input type="text" id="loginID" name="loginID" placeholder="Enter your login ID" required />
                </div>
                <div className="form-group1">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn_l">Login</button>
            </form>
            <div className="footer_l">
                <p>Don't have an account? <a  onClick={() => { nav("/signup") }}>Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;
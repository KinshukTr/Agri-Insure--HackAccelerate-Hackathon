import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Sign.css'; // Import your CSS file

const Sign=() => {
    let nav = useNavigate();
    
    return (
        <div className="container">
            <h2>AGRI INSURE</h2>
            <h3>SIGN UP</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="farmerName">Farmer Name</label>
                    <input type="text" id="farmerName" name="farmerName" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNo">Contact Number</label>
                    <input type="tel" id="contactNo" name="contactNo" placeholder="Enter your contact number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="metamaskID">MetaMask ID</label>
                    <input type="text" id="metamaskID" name="metamaskID" placeholder="Enter your MetaMask ID" required />
                </div>
                <div className="form-group">
                    <label htmlFor="idProof">ID Proof </label>
                    <input type="file" id="idProof" name="idProof" required />
                </div>
                <div className="form-group">
                    <label htmlFor="region">Region</label>
                    <select id="region" name="region" required>
                        <option value="" disabled selected>Select your region</option>
                        <option value="City1">Thane</option>
                        <option value="City2">Yavatmal</option>
                        <option value="City3">Akola</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <button type="submit" className="btn_s">Sign Up</button>
            </form>
            <div className="footer_s">
                <p>Already have an account? <a onClick={() => { nav("/login") }}>Login</a></p>
            </div>
        </div>
    );
};
export default Sign;



// KYCForm.js
import React, { useState } from 'react';
import { useNetwork, useAccount } from 'wagmi';

import { transferGhoTokens } from '../utils'

function KYCForm() {
    const { chain } = useNetwork();
    const { address } = useAccount()
    const FIXED_PRIZE_MONEY = 1

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('kycData', JSON.stringify(formData));

        transferGhoTokens(address, FIXED_PRIZE_MONEY);

        alert('KYC Data Saved!');
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    };

    const inputGroupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
    };

    const labelStyle = {
        marginRight: '10px',
        fontWeight: 'bold',
        width: '30%' // Adjust the width as needed
    };

    const inputStyle = {
        flexGrow: '1',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px'
    };

    const buttonStyle = {
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Full Name:</label>
                <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    style={inputStyle}
                />
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    style={inputStyle}
                />
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Phone Number:</label>
                <input 
                    type="text" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                    style={inputStyle}
                />
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Address:</label>
                <input 
                    type="text" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    style={inputStyle}
                />
            </div>
            <button type="submit" style={buttonStyle}>Submit</button>
        </form>
    );
}

export default KYCForm;

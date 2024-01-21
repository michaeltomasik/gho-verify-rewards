// KYCForm.js
import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image'

import { useNetwork, useAccount } from 'wagmi';

import { transferGhoTokens } from '../utils'
import logo from '../styles/logo.svg'


function KYCForm() {
    const { chain } = useNetwork();
    const { address } = useAccount()
    const FIXED_PRIZE_MONEY = 1

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#2c2c2c',
        height: '591px',
        width: '415px'
    };

    const inputGroupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '3px',
        marginBottom: '20px',
        flexDirection: 'column',
        color: 'white'
    };

    const labelStyle = {
        marginRight: '10px',
    };

    const inputStyle = {
        flexGrow: '1',
        padding: '8px',
        border: '1px solid #29f0fc',
        borderRadius: '4px',
        height: '48px',
        paddingLeft: '20px',
        backgroundColor: '#2c2c2c',
        color: 'white'
    };

    const buttonStyle = {
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#2c2c2c',
        color: '#29f0fc',
        cursor: 'pointer',
        marginTop: '40px',
        fontSize: '15px'
    };

    const connectStyle = {
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={connectStyle} >
                <Image
                src={logo}
                height={50}
                alt="Picture of the author"
                />

                <ConnectButton showBalance={false} />
            </div>
            {address ? <>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>First Name:</label>
                    <input 
                        type="text" 
                        name="First Name" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        style={inputStyle}
                    />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Last Name:</label>
                    <input 
                        type="text" 
                        name="last" 
                        value={formData.lastName} 
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
            </> : null}
        </form>
    // <div className="box">
    // <div style={inputGroupStyle}>
    //     <label style={labelStyle}>Phone Number:</label>
    //     <input 
    //         type="text" 
    //         name="phoneNumber" 
    //         value={formData.phoneNumber} 
    //         onChange={handleChange} 
    //         style={inputStyle}
    //     />
    // </div>
    //   <div className="group">
    //     <div className="overlap">
    //       <div className="rectangle" />
    //       <div className="div">
    //         <div className="group-2">
    //           <div className="div-wrapper">
    //             <div className="text-wrapper">Next</div>
    //           </div>
    //           <img className="img" alt="Group" src="group-43.png" />
    //         </div>
    //         <div className="group-3">
    //           <div className="group-4">
    //             <div className="text-wrapper-2">Back</div>
    //           </div>
    //           <img className="group-5" alt="Group" src="image.png" />
    //         </div>
    //         <img className="vector" alt="Vector" src="vector-16.svg" />
    //         <div className="text-wrapper-3">1/3</div>
    //       </div>
    //       <div className="text-wrapper-4">Date of birth</div>
    //       <div className="group-wrapper">
    //         <div className="group-6">
    //           <div className="text-wrapper-5">28</div>
    //         </div>
    //       </div>
    //       <div className="overlap-group-wrapper">
    //         <div className="overlap-group">
    //           <div className="text-wrapper-5">03</div>
    //         </div>
    //       </div>
    //       <div className="overlap-wrapper">
    //         <div className="overlap-2">
    //           <div className="text-wrapper-6">1987</div>
    //         </div>
    //       </div>
    //       <div className="group-7">
    //         <div className="text-wrapper-7">{address}</div>
    //       </div>
    //       <div className="group-8">
    //         <div className="text-wrapper-9">Legal name</div>
    //         <div className="group-9">
    //           <div className="group-10">
    //             <div className="text-wrapper-10">American</div>
    //             <img className="group-11" alt="Group" src="group-18.png" />
    //           </div>
    //         </div>
    //         <div className="group-12">
    //           <div className="group-13">
    //             <div className="text-wrapper-10">Stefanie</div>
    //           </div>
    //         </div>
    //         <div className="group-14">
    //           <div className="group-15">
    //             <div className="text-wrapper-10">Joannie Angelina</div>
    //           </div>
    //         </div>
    //         <div className="group-16">
    //           <div className="group-17">
    //             <div className="text-wrapper-10">Germanotta</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="img-wrapper">
    //         <img className="group-18" alt="Group" src="group-60.png" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    );
}

export default KYCForm;

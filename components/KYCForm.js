// KYCForm.js
import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image'

import { useNetwork, useAccount, sepolia } from 'wagmi';
import AccountInfo from './AccountInfo'
import Spinner from './Spinner'
import { transferGhoTokens } from '../utils'
import logo from '../styles/logo.svg'


function KYCForm() {
    const { chain } = useNetwork();
    const { address } = useAccount()
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('kycData', JSON.stringify(formData));
        setIsLoading(true)
        // VERIFY DATA WITH AI 3rd party servie
        const result = await transferGhoTokens(address, FIXED_PRIZE_MONEY);

        setIsLoading(false)
        if (result) {
            setSuccess(true)
        } else {
            alert('ERROR')
        }
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
        width: '415px',
        color: 'white'
    };

    const loadingContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#2c2c2c',
        height: '415px',
        width: '415px',
        color: 'white'
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
    // const spinnerStyle = {
    //     border: '16px solid #f3f3f3', // Light grey background
    //     borderTop: '16px solid #29f0fc', // Blue color
    //     borderRadius: '50%',
    //     width: '120px',
    //     height: '120px',
    //     animation: 'spin 2s linear infinite'
    //   };
      
    //   // Add keyframes for the spin animation to your CSS
    //   const styleSheet = document.styleSheets[0];
    //   styleSheet.insertRule(`
    //     @keyframes spin {
    //       0% { transform: rotate(0deg); }
    //       100% { transform: rotate(360deg); }
    //     }
    //   `, styleSheet.cssRules.length);

    if (isLoading) {
        return         <div style={loadingContainerStyle}>
            <h1>Verification Process...</h1>
            <h5>Please wait...</h5>
        <Spinner />
        </div>
    }
    if (success) {
        return         <div style={loadingContainerStyle}>
            <h1>Verification Completed</h1>
            <AccountInfo />
        </div>
    }
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
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        style={inputStyle}
                    />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Last Name:</label>
                    <input 
                        type="text" 
                        name="lastName" 
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

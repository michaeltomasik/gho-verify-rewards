import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios'


const GhoBalance = ({ userAddress }) => {
    const [balance, setBalance] = useState('Loading...');
    const [ghoTokenABI, setGhoTokenABI] = useState(null);

    const ghoTokenAddress = '0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f'; // Replace with the actual contract address
    const abiUrl = 'https://api.etherscan.io/api?module=contract&action=getabi&address=0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f';

    useEffect(() => {
        const fetchABI = async () => {
            try {
                const response = await axios.get(abiUrl);
                setGhoTokenABI(JSON.parse(response.data.result));
            } catch (error) {
                console.error('Error fetching ABI:', error);
            }
        };

        fetchABI();
    }, []);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const web3 = new Web3(Web3.givenProvider || 'YOUR_INFURA_ENDPOINT');
                const ghoTokenContract = new web3.eth.Contract(ghoTokenABI, ghoTokenAddress);
                const balance = await ghoTokenContract.methods.balanceOf(userAddress).call();
                const formattedBalance = web3.utils.fromWei(balance, 'ether');
                setBalance(formattedBalance);
            } catch (error) {
                console.error('Error fetching GHO balance:', error);
                setBalance('Error');
            }
        };

        if (userAddress) {
            fetchBalance();
        }
    }, [userAddress]);

    return (
        <div>
            <h3>GHO Balance</h3>
            <p>{balance} GHO</p>
        </div>
    );
};

export default GhoBalance;

import { ethers } from 'ethers';
import ghoTokenABI from './ghoTokenABI.json'; // Import the ABI for the GHO token
import { unstable_noStore as noStore } from 'next/cache'

const ghoTokenAddress = '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60'; // Replace with the actual contract address

export const transferGhoTokens = async (toAddress, amount) => {
    noStore()
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
    try {
      // Create a wallet instance from a private key
      const wallet = new ethers.Wallet(privateKey);
      // Connect the wallet to a provider
      const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA);
      const signer = wallet.connect(provider);

      // Create a contract instance
      const ghoTokenContract = new ethers.Contract(ghoTokenAddress, ghoTokenABI, signer);

      // Perform the transfer
      const tx = await ghoTokenContract.transfer(toAddress, ethers.utils.parseUnits(amount.toString(), 'ether'));
      await tx.wait();

      console.log('Transfer successful:', tx);
  } catch (error) {
      console.error('Transfer failed:', error);
  }
}
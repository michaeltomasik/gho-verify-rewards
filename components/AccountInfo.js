import { useAccount, useBalance } from 'wagmi';

const AccountInfo = () => {
  const { address } = useAccount()

  const balanceData = useBalance({
    address,
    token: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60', // GHO
  });

  if (!address) {
    return <div>Please connect your wallet.</div>;
  }

  return (
    <div>
      {/* <div>Account: {address}</div> */}
      <div>Account Balance: {balanceData ? balanceData?.data?.formatted : 'Loading...'} GHO</div>
    </div>
  );
}
export default AccountInfo;

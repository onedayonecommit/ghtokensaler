import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';
import { CA_ABI } from './ca_abi';

function App() {
  const [web3, setWeb3] = useState(null);
  const [_accounts, setAccounts] = useState(null);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
      } catch (error) {
        console.log(error)
      }
    }
  }, [])
  const memaLogin = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts)
    setAccounts(accounts);
  }
  return (
    // <Routes>
    //   <Route path='/' element={ }></Route>
    // </Routes>
    <div>
      <button onClick={() => {
        memaLogin()
      }}>connectWallet</button>
      <button onClick={async () => {
        const contract = await new web3.eth.Contract(CA_ABI.TestAbi, CA_ABI.TestCa);
        console.log(await contract);
        await contract.methods.Checkevent(30).send({ from: _accounts[0] }).then(console.log).catch(console.log)
        // console.log(await contract.methods.Checkevent(30).send({ from: accounts }));
      }}>contractfunction</button>
    </div>
  );
}
export default App;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';
import { CA_ABI } from './ca_abi';
import { MainHeader } from './components';

function App() {
  const [web3, setWeb3] = useState(null);
  const dispatch = useDispatch();
  const [_accounts, setAccounts] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3 = new Web3(window.ethereum);
        console.log(window.ethereum)
        setWeb3(web3);
      } catch (error) {
        console.log(error)
      }
    }
  }, [])
  return (
    // <Routes>
    //   <Route path='/' element={ }></Route>
    // </Routes>
    <div>
      <MainHeader />
      {/* <button onClick={async () => {
        const contract = await new web3.eth.Contract(CA_ABI.TestAbi, CA_ABI.TestCa);
        console.log(await contract);
        await contract.methods.Checkevent(30).send({ from: _accounts[0] }).then(console.log).catch(console.log)
        // console.log(await contract.methods.Checkevent(30).send({ from: accounts }));
      }}>contractfunction</button> */}
    </div>
  );
}
export default App;

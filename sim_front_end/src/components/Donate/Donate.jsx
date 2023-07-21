import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { Web3 } from "web3";
import {
  faucetContract,
  simTokeContract,
  donateContract,
  donateAddress,
} from "../../abis/abis";

const Donate = () => {
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);
  const [balance, setBalance] = useState();
  const web3 = new Web3(window.ethereum);
  const [shouldReaload, reload] = useState(false);
  const reloadEffect = () => {
    reload(!shouldReaload);
  };

  useEffect(() => {
    const loadBalance = async () => {
      const provider = await detectEthereumProvider();

      if (provider !== null) {
        const DonateContract = await donateContract();
        const balance = await DonateContract.methods.getBalance().call();
        await setBalance(web3.utils.fromWei(balance, "ether"));
      }
    };
    loadBalance();
  }, [shouldReaload]);

  const faucet = async () => {
    try {
      const FaucetContract = await faucetContract();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const getBalance = await FaucetContract.methods
        .requesttoken()
        .send({ from: accounts[0] });

      console.log(getBalance);
    } catch (err) {
      console.error(err.message);
    }
  };

  const withdraw = async () => {
    try {
      const DonateContract = await donateContract();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await DonateContract.methods.withdraws().send({ from: accounts[0] });
    } catch (err) {
      console.error(err.message);
    }
    reloadEffect();
  };

  const donate = async () => {
    try {
      const DonateContract = await donateContract();
      const SimTokeContract = await simTokeContract();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let donateAmount = Number(document.getElementById("inputField").value);
      let allowance = await SimTokeContract.methods
        .allowance(accounts[0], donateAddress)
        .call();
      let allowanceFromWei = await web3.utils.fromWei(allowance, "ether");
      console.log(allowanceFromWei);
      if (allowanceFromWei < donateAmount) {
        await approve(donateAmount);
        await DonateContract.methods
          .donate(donateAmount)
          .send({ from: accounts[0] });
      } else {
        await DonateContract.methods
          .donate(donateAmount)
          .send({ from: accounts[0] });
      }
    } catch (err) {
      console.error(err.message);
    }
    reloadEffect();
  };

  const approve = async (donateAmount) => {
    try {
      const SimTokeContract = await simTokeContract();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await SimTokeContract.methods
        .approve(donateAddress, donateAmount)
        .send({ from: accounts[0] });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="h-screen gradient-bg-hero">
      <div
        className="flex flex-col md:flex-row w-4/5 justify-center 
 mx-auto  py-10 h-screen items-center"
      >
        <div>
          <div className=" text-white text-4xl mb-5">
            Current Balance: <strong>{balance} Sim Token</strong>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl min-w-max "
              onClick={donate}
            >
              Donate
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl  min-w-max"
              onClick={withdraw}
            >
              Withdraw
            </button>
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-2xl min-w-max "
              onClick={faucet}
            >
              Token Faucet
            </button>
          </div>
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 my-5 w-32"
            id="inputField"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Donate;

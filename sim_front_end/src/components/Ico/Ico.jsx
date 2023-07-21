import React from "react";
import bnbBg from "../../assets/bnb-bg.jpeg";
import bnb from "../../assets/bnb.png";
import usdtBg from "../../assets/usdt-bg.png";
import usdt from "../../assets/usdt.png";
import { Web3 } from "web3";
import { icoContract, usdtContract, icoAddress } from "../../abis/abis";

const Ico = () => {
  const web3 = new Web3(window.ethereum);

  const bnb01 = async () => {
    try {
      const IcoContract = await icoContract();

      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await IcoContract.methods
        .buyTokenByBNB()
        .send({ from: accounts[0], value: web3.utils.toWei("0.01", "ether") });
    } catch (err) {
      console.error(err.message);
    }
  };

  const bnb02 = async () => {
    try {
      const IcoContract = await icoContract();
      console.log(contract);
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await IcoContract.methods
        .buyTokenByBNB()
        .send({ from: accounts[0], value: web3.utils.toWei("0.02", "ether") });
    } catch (err) {
      console.error(err.message);
    }
  };

  const bnb03 = async () => {
    try {
      const IcoContract = await icoContract();
      console.log(contract);
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await IcoContract.methods
        .buyTokenByBNB()
        .send({ from: accounts[0], value: web3.utils.toWei("0.03", "ether") });
    } catch (err) {
      console.error(err.message);
    }
  };

  const usdt01 = async () => {
    try {
      const IcoContract = await icoContract();
      const UsdtContract = await usdtContract();
      const amountUsdt = web3.utils.toWei("10", "ether");

      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let allowance = await UsdtContract.methods
        .allowance(accounts[0], icoAddress)
        .call();
      let allowanceFromWei = await web3.utils.fromWei(allowance, "ether");
      console.log(allowanceFromWei);
      if (allowanceFromWei < 10) {
        await approve(10);

        await IcoContract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      } else {
        await IcoContract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const usdt02 = async () => {
    try {
      const IcoContract = await icoContract();
      const UsdtContract = await usdtContract();
      const amountUsdt = web3.utils.toWei("20", "ether");

      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let allowance = await UsdtContract.methods
        .allowance(accounts[0], icoAddress)
        .call();
      let allowanceFromWei = await web3.utils.fromWei(allowance, "ether");
      console.log(allowanceFromWei);
      if (allowanceFromWei < 20) {
        await approve(20);

        await IcoContract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      } else {
        await IcoContract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const usdt03 = async () => {
    try {
      const IcoContract = await icoContract();
      const UsdtContract = await usdtContract();
      const amountUsdt = web3.utils.toWei("30", "ether");

      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let allowance = await UsdtContract.methods
        .allowance(accounts[0], icoAddress)
        .call();
      let allowanceFromWei = await web3.utils.fromWei(allowance, "ether");
      console.log(allowanceFromWei);
      if (allowanceFromWei < 30) {
        await approve(30);

        await IcoContract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      } else {
        await IcoContract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const approve = async (_amount) => {
    try {
      const UsdtContract = await usdtContract();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await UsdtContract.methods
        .approve(icoAddress, _amount)
        .send({ from: accounts[0] });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen gradient-bg-hero">
      <div className="w-4/5 py-10 mx-auto  ">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient  text-center">
          Packages
        </h4>
      </div>

      <div className="w-4/5 py-10 mx-auto grid grid-cols-1 lg:grid-cols-3  gap-12 md:gap-auto  ">
        <div className="bg-[#612e3e] rounded-3xl grid min-w-min border border-amber-500">
          <div className="relative">
            <img src={bnbBg} className="w-full p-2 rounded-3xl  " alt="bnbBg" />
            <img
              src={bnb}
              className=" w-1/5 absolute left-1/2 -translate-x-2/4 top-3/4 p-1 rounded-full bg-[#612e3e]  "
              alt="bnb"
            />
          </div>

          <div className="mt-24 lg:mt-16 text-white text-center text-2xl">
            <p>
              <strong>BNB PACKAGE 01</strong>
            </p>
            <p className=" text-xl mt-8"> 1.000 Sim</p>
            <p className=" text-[15px] opacity-60 mt-6">
              Amount of coins to pay: <strong>0.01 BNB</strong>
            </p>
            <div className="m-2 mt-7">
              <button
                onClick={bnb01}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl min-w-full  "
              >
                Buy
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#612e3e] rounded-3xl grid min-w-min border border-amber-500">
          <div className="relative">
            <img src={bnbBg} className="w-full p-2 rounded-3xl  " alt="bnbBg" />
            <img
              src={bnb}
              className=" w-1/5 absolute left-1/2 -translate-x-2/4 top-3/4 p-1 rounded-full bg-[#612e3e]  "
              alt="bnb"
            />
          </div>

          <div className="mt-24 lg:mt-16 text-white text-center text-2xl">
            <p>
              <strong>BNB PACKAGE 02</strong>
            </p>
            <p className=" text-xl mt-8"> 2.000 Sim</p>
            <p className=" text-[15px] opacity-60 mt-6">
              Amount of coins to pay: <strong>0.02 BNB</strong>
            </p>
            <div className="m-2 mt-7">
              <button
                onClick={bnb02}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl min-w-full  "
              >
                Buy
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#612e3e] rounded-3xl grid min-w-min border border-amber-500">
          <div className="relative">
            <img src={bnbBg} className="w-full p-2 rounded-3xl  " alt="bnbBg" />
            <img
              src={bnb}
              className=" w-1/5 absolute left-1/2 -translate-x-2/4 top-3/4 p-1 rounded-full bg-[#612e3e]  "
              alt="bnb"
            />
          </div>

          <div className="mt-24 lg:mt-16 text-white text-center text-2xl">
            <p>
              <strong>BNB PACKAGE 03</strong>
            </p>
            <p className=" text-xl mt-8"> 3.000 Sim</p>
            <p className=" text-[15px] opacity-60 mt-6">
              Amount of coins to pay: <strong>0.03 BNB</strong>
            </p>
            <div className="m-2 mt-7">
              <button
                onClick={bnb03}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl min-w-full  "
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 py-10 mx-auto grid grid-cols-1 lg:grid-cols-3  gap-12 md:gap-auto  ">
        <div className="bg-[#612e3e] rounded-3xl grid min-w-min border border-amber-500">
          <div className="relative">
            <img
              src={usdtBg}
              className="w-full p-2 rounded-3xl  "
              alt="bnbBg"
            />
            <img
              src={usdt}
              className=" w-1/5 absolute left-1/2 -translate-x-2/4 top-3/4 p-1 rounded-full bg-[#612e3e]  "
              alt="bnb"
            />
          </div>

          <div className="mt-24 lg:mt-16 text-white text-center text-2xl">
            <p>
              <strong>USDT PACKAGE 01</strong>
            </p>
            <p className=" text-xl mt-8"> 1.000 Sim</p>
            <p className=" text-[15px] opacity-60 mt-6">
              Amount of coins to pay: <strong>10 USDT</strong>
            </p>
            <div onClick={usdt01} className="m-2 mt-7">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl min-w-full  ">
                Buy
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#612e3e] rounded-3xl grid min-w-min border border-amber-500">
          <div className="relative">
            <img
              src={usdtBg}
              className="w-full p-2 rounded-3xl  "
              alt="bnbBg"
            />
            <img
              src={usdt}
              className=" w-1/5 absolute left-1/2 -translate-x-2/4 top-3/4 p-1 rounded-full bg-[#612e3e]  "
              alt="bnb"
            />
          </div>

          <div className="mt-24 lg:mt-16 text-white text-center text-2xl">
            <p>
              <strong>USDT PACKAGE 02</strong>
            </p>
            <p className=" text-xl mt-8"> 2.000 Sim</p>
            <p className=" text-[15px] opacity-60 mt-6">
              Amount of coins to pay: <strong>20 USDT</strong>
            </p>
            <div onClick={usdt02} className="m-2 mt-7">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl min-w-full  ">
                Buy
              </button>
            </div>
          </div>
        </div>

        <div
          onClick={usdt03}
          className="bg-[#612e3e] rounded-3xl grid min-w-min border border-amber-500"
        >
          <div className="relative">
            <img
              src={usdtBg}
              className="w-full p-2 rounded-3xl  "
              alt="bnbBg"
            />
            <img
              src={usdt}
              className=" w-1/5 absolute left-1/2 -translate-x-2/4 top-3/4 p-1 rounded-full bg-[#612e3e]  "
              alt="bnb"
            />
          </div>

          <div className="mt-24 lg:mt-16 text-white text-center text-2xl">
            <p>
              <strong>USDT PACKAGE 03</strong>
            </p>
            <p className=" text-xl mt-8"> 3.000 Sim</p>
            <p className=" text-[15px] opacity-60 mt-6">
              Amount of coins to pay: <strong>30 USDT</strong>
            </p>
            <div className="m-2 mt-7">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl min-w-full  ">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ico;

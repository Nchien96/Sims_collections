import React from "react";
import bnbBg from "../../assets/bnb-bg.jpeg";
import bnb from "../../assets/bnb.png";
import usdtBg from "../../assets/usdt-bg.png";
import usdt from "../../assets/usdt.png";
import detectEthereumProvider from "@metamask/detect-provider";
import { Web3 } from "web3";

const Ico = () => {
  const web3 = new Web3(window.ethereum);
  const icoAddress = "0xCA4C06De8B48393De26146Fc5A96F25A6E13247E";
  const icoAbi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "bnb_rate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "usdt_rate",
          type: "uint256",
        },
        {
          internalType: "address payable",
          name: "wallet",
          type: "address",
        },
        {
          internalType: "contract IERC20",
          name: "icotoken",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "BuyTokenByBNB",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "BuyTokenByUSDT",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "newRate",
          type: "uint256",
        },
      ],
      name: "SetBNBRate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "newRate",
          type: "uint256",
        },
      ],
      name: "SetUSDTRate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "contract IERC20",
          name: "tokenAddress",
          type: "address",
        },
      ],
      name: "SetUSDTToken",
      type: "event",
    },
    {
      inputs: [],
      name: "BNB_rate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "USDT_rate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_wallet",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "buyTokenByBNB",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "USDTAmount",
          type: "uint256",
        },
      ],
      name: "buyTokenByUSDT",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "BNBAmount",
          type: "uint256",
        },
      ],
      name: "getTokenAmountBNB",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "USDTAmount",
          type: "uint256",
        },
      ],
      name: "getTokenAmountUSDT",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "new_rate",
          type: "uint256",
        },
      ],
      name: "setBNBRate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "new_rate",
          type: "uint256",
        },
      ],
      name: "setUSDTRate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IERC20",
          name: "token_address",
          type: "address",
        },
      ],
      name: "setUSDTToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "usdtToken",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawErc20",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const usdtAddress = "0xca0a8f79De47aE76EA4000DBc0BbBF8EA05254d8";
  const usdtAbi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burnFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const bnb01 = async () => {
    const contract = await new web3.eth.Contract(icoAbi, icoAddress);
    console.log(contract);
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    await contract.methods
      .buyTokenByBNB()
      .send({ from: accounts[0], value: web3.utils.toWei("0.01", "ether") });
  };

  const bnb02 = async () => {
    const contract = await new web3.eth.Contract(icoAbi, icoAddress);
    console.log(contract);
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    await contract.methods
      .buyTokenByBNB()
      .send({ from: accounts[0], value: web3.utils.toWei("0.02", "ether") });
  };

  const bnb03 = async () => {
    const contract = await new web3.eth.Contract(icoAbi, icoAddress);
    console.log(contract);
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    await contract.methods
      .buyTokenByBNB()
      .send({ from: accounts[0], value: web3.utils.toWei("0.03", "ether") });
  };

  const usdt01 = async () => {
    try {
      const contract = await new web3.eth.Contract(icoAbi, icoAddress);
      const usdtContract = await new web3.eth.Contract(usdtAbi, usdtAddress);
      const amountUsdt = web3.utils.toWei("10", "ether");
      console.log(contract);
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let allowance = await usdtContract.methods
        .allowance(accounts[0], icoAddress)
        .call();
      let allowanceFromWei = await web3.utils.fromWei(allowance, "ether");
      console.log(allowanceFromWei);
      if (allowanceFromWei < 10) {
        await approve(10);

        await contract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      } else {
        await contract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const usdt02 = async () => {
    try {
      const contract = await new web3.eth.Contract(icoAbi, icoAddress);
      const usdtContract = await new web3.eth.Contract(usdtAbi, usdtAddress);
      const amountUsdt = web3.utils.toWei("20", "ether");
      console.log(contract);
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let allowance = await usdtContract.methods
        .allowance(accounts[0], icoAddress)
        .call();
      let allowanceFromWei = await web3.utils.fromWei(allowance, "ether");
      console.log(allowanceFromWei);
      if (allowanceFromWei < 20) {
        await approve(20);

        await contract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      } else {
        await contract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const usdt03 = async () => {
    try {
      const contract = await new web3.eth.Contract(icoAbi, icoAddress);
      const usdtContract = await new web3.eth.Contract(usdtAbi, usdtAddress);
      const amountUsdt = web3.utils.toWei("30", "ether");
      console.log(contract);
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let allowance = await usdtContract.methods
        .allowance(accounts[0], icoAddress)
        .call();
      let allowanceFromWei = await web3.utils.fromWei(allowance, "ether");
      console.log(allowanceFromWei);
      if (allowanceFromWei < 30) {
        await approve(30);

        await contract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      } else {
        await contract.methods
          .buyTokenByUSDT(amountUsdt)
          .send({ from: accounts[0] });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const approve = async (_amount) => {
    try {
      const contract = await new web3.eth.Contract(usdtAbi, usdtAddress);
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await contract.methods
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

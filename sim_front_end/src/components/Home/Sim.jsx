import nftMk from "../../assets/nftMaketplace.png";
import identicon from "../../assets/identicon.png";
import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { Web3 } from "web3";
import { simNftContract } from "../../abis/abis";

const Sim = () => {
  const [hasProvider, setHasProvider] = useState(false);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);
  const web3 = new Web3(window.ethereum);

  useEffect(() => {
    const refreshAccounts = (accounts) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider();
      await setHasProvider(provider);

      if (provider) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        await refreshAccounts(accounts);
        window.ethereum.on("accountsChanged", refreshAccounts);
      }
    };

    getProvider();
  }, []);

  const updateWallet = async (accounts) => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    try {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      updateWallet(accounts);
    } catch (err) {
      alert("Metamask not yet connected");
    }
  };

  const trucate = (text, stratChars, endChars, maxLength) => {
    if (text.length > maxLength) {
      let start = text.substring(0, stratChars);
      let end = text.substring(text.length - endChars, text.length);
      while (start.length + end.length < maxLength) {
        start = start + ".";
      }
      return start + end;
    }
    return text;
  };

  const mints = async () => {
    try {
      const SimNftContract = await simNftContract();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const addressTo = await web3.utils.toChecksumAddress(accounts[0]);
      console.log(addressTo);
      await SimNftContract.methods.mint(addressTo).send({ from: accounts[0] });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
    items-start mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-white text-5xl font-bold">
            Buy and Sell <br /> Digital Arts, <br />
            <span className="text-gradient">NFTs</span> Collections
          </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f]
            rounded-full cursor-pointer p-2"
            onClick={mints}
          >
            Mint NFT
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-white font-bold">1231k</p>
            <small className="text-gray-300">User</small>
          </div>
          <div>
            <p className="text-white font-bold">152k</p>
            <small className="text-gray-300">Artwork</small>
          </div>
          <div>
            <p className="text-white font-bold">200k</p>
            <small className="text-gray-300">Artist</small>
          </div>
        </div>
      </div>

      <div
        className="shadow-xl shadow-black md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <img className="h-auto w-full object-cover" src={nftMk} alt="nftMk" />
        <div className="flex justify-start items-center p-3">
          <img
            className="h-10 w-auto object-contain rounded-full mr-3 "
            src={identicon}
            alt=""
          />
          <div>
            <p className="text-white font-semibold">
              {wallet.accounts.length > 0
                ? trucate(wallet.accounts[0], 4, 4, 11)
                : ""}
            </p>
            <small className="text-pink-800 font-bold">@you</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sim;

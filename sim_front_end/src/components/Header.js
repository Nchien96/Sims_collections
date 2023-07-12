import simLogo from "../assets/sim.png";
import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { Web3 } from "web3";

const Header = () => {
  const [hasProvider, setHasProvider] = useState(false);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);
  const web3 = new Web3(window.ethereum);
  const bsctestID = 97;

  useEffect(() => {
    const refreshAccounts = (accounts) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const switchNetwork = async (chainID) => {
      const currentChainID = await web3.eth.getChainId();
      if (currentChainID != chainID) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
              {
                chainId: Web3.utils.toHex(chainID),
              },
            ],
          });
        } catch {
          await addNetwork(bsctestNetwork);
        }
      }
    };

    const bsctestNetwork = {
      chainId: Web3.utils.toHex(bsctestID),
      chainName: "BNB Smart Chain Testnet",
      nativeCurrency: {
        name: "BNB Smart Chain Testnet",
        symbol: "tBNB",
        decimals: 18,
      },
      blockExplorerUrls: ["https://testnet.bscscan.com/"],
      rpcUrls: ["https://data-seed-prebsc-1-s3.binance.org:8545/"],
    };

    const addNetwork = async (netWork) => {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [netWork],
        });
      } catch {
        alert("you need to switch to BSC Testnet");
      }
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider();
      console.log(provider);
      await switchNetwork(bsctestID);
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

  return (
    <div className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img className="w-32 cursor-pointer" src={simLogo} alt="Logo" />
      </div>
      <ul
        className="md:flex-[0.5] text-white md:flex
      hidden list-none flex-row justify-between 
      items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Donate</li>
        <li className="mx-4 cursor-pointer">Ico</li>
        <li className="mx-4 cursor-pointer">Maketplace</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      <button
        className="shadow-xl shadow-black text-white
      bg-[#e32970] hover:bg-[#bd255f] md:text-sm p-2
        rounded-full cursor-pointer "
        onClick={handleConnect}
      >
        {wallet.accounts.length > 0
          ? trucate(wallet.accounts[0], 4, 4, 11)
          : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Header;

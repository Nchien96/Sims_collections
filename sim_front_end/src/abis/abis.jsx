import simTokenAbi from "./build/contracts/CryptoSimsToken.sol/CryptoSims.json";
import donateAbi from "./build/contracts/Donate.sol/Donate.json";
import faucetAbi from "./build/contracts/Faucet.sol/Faucet.json";
import simNftAbi from "./build/contracts/Sims.sol/Sim.json";
import maketplaceAbi from "./build/contracts/SimMarketplace.sol/SimMarketplace.json";
import usdtAbi from "./build/contracts/USDT.sol/USDT.json";
import icoAbi from "./build/contracts/SIMSCrowndsale.sol/SIMSCrowdSale.json";
import vaultAbi from "./build/contracts/Vault.sol/Vault.json";
import { Web3 } from "web3";

const web3 = new Web3(window.ethereum);

const simsTokenAddress = "0xaCE7f7970BCb344fEA5387e4ecEd6EC0559A3C7D";
const vaultAddress = "0x089079E533d9bbAeb023df64B6D1E8b4a31dC429";
const usdtAddress = "0xca0a8f79De47aE76EA4000DBc0BbBF8EA05254d8";
const icoAddress = "0xCA4C06De8B48393De26146Fc5A96F25A6E13247E";
const simNftAddress = "0xCAC9CBB13dDF7e1Efdf51626b52d1DbA872636D3";
const marketplaceAddress = "0xF47930777eF77FB7ba9C1b74e8C2d25438E490F0";
const auctionAddress = "0xa9341d822CF4aEd4bD3057aD23ae974cb35DF173";
const faucetAddress = "0x43057D1321D83911c1841a36AcF6Ef6e052a2b5a";
const donateAddress = "0x81FBFf4F475dE735FB198E1736CDcbE8fFb8fecF";

const simTokeContract = async () => {
  const simTokeContract = new web3.eth.Contract(
    simTokenAbi.abi,
    simsTokenAddress
  );
  return simTokeContract;
};

const vaultContract = async () => {
  const vaultContract = new web3.eth.Contract(vaultAbi.abi, vaultAddress);
  return vaultContract;
};

const donateContract = async () => {
  const donateContract = new web3.eth.Contract(donateAbi.abi, donateAddress);
  return donateContract;
};

const usdtContract = async () => {
  const usdtContract = new web3.eth.Contract(usdtAbi.abi, usdtAddress);
  return usdtContract;
};

const maketplaceContract = async () => {
  const maketplaceContract = new web3.eth.Contract(
    maketplaceAbi.abi,
    marketplaceAddress
  );
  return maketplaceContract;
};

const simNftContract = async () => {
  const simNftContract = new web3.eth.Contract(simNftAbi.abi, simNftAddress);
  return simNftContract;
};

const faucetContract = async () => {
  const faucetContract = new web3.eth.Contract(faucetAbi.abi, faucetAddress);
  return faucetContract;
};

const icoContract = async () => {
  const icoContract = new web3.eth.Contract(icoAbi.abi, icoAddress);
  return icoContract;
};

export {
  icoContract,
  simTokeContract,
  donateContract,
  faucetContract,
  simNftContract,
  maketplaceContract,
  usdtContract,
  vaultContract,
  simsTokenAddress,
  vaultAddress,
  usdtAddress,
  icoAddress,
  simNftAddress,
  marketplaceAddress,
  auctionAddress,
  faucetAddress,
  donateAddress,
};

import simTokenAbi from "./CryptoSims.json";
import donateAbi from "./Donate.json";
import faucetAbi from "./Faucet.json";
import simNftAbi from "./Sim.json";
import maketplaceAbi from "./SimMarketplace.json";
import usdtAbi from "./USDT.json";
import icoAbi from "./SIMSCrowdSale.json";
import vaultAbi from "./Vault.json";
import { Web3 } from "web3";

const web3 = new Web3(window.ethereum);

const simsTokenAddress = "0xaCE7f7970BCb344fEA5387e4ecEd6EC0559A3C7D";
const vaultAddress = "0x089079E533d9bbAeb023df64B6D1E8b4a31dC429";
const usdtAddress = "0xca0a8f79De47aE76EA4000DBc0BbBF8EA05254d8";
const icoAddress = "0xCA4C06De8B48393De26146Fc5A96F25A6E13247E";
const simNftAddress = "0xCAC9CBB13dDF7e1Efdf51626b52d1DbA872636D3";
const marketplaceAddress = "0x37a116dDc7968FcB92C0a68c8249Bf76cC579716";
const auctionAddress = "0xa9341d822CF4aEd4bD3057aD23ae974cb35DF173";
const faucetAddress = "0x3629bEb51c9BC2cd0d72aAf39B2A107C08C71AEf";
const donateAddress = "0x81FBFf4F475dE735FB198E1736CDcbE8fFb8fecF";

const simTokeContract = async () => {
  const simTokeContract = new web3.eth.Contract(
    simTokenAbi.abi,
    "0xaCE7f7970BCb344fEA5387e4ecEd6EC0559A3C7D"
  );
  return simTokeContract;
};

const vaultContract = async () => {
  const vaultContract = new web3.eth.Contract(
    vaultAbi.abi,
    "0x089079E533d9bbAeb023df64B6D1E8b4a31dC429"
  );
  return vaultContract;
};

const donateContract = async () => {
  const donateContract = new web3.eth.Contract(
    donateAbi.abi,
    "0x81FBFf4F475dE735FB198E1736CDcbE8fFb8fecF"
  );
  return donateContract;
};

const usdtContract = async () => {
  const usdtContract = new web3.eth.Contract(
    usdtAbi.abi,
    "0xca0a8f79De47aE76EA4000DBc0BbBF8EA05254d8"
  );
  return usdtContract;
};

const maketplaceContract = async () => {
  const maketplaceContract = new web3.eth.Contract(
    maketplaceAbi.abi,
    "0x37a116dDc7968FcB92C0a68c8249Bf76cC579716"
  );
  return maketplaceContract;
};

const simNftContract = async () => {
  const simNftContract = new web3.eth.Contract(
    simNftAbi.abi,
    "0xCAC9CBB13dDF7e1Efdf51626b52d1DbA872636D3"
  );
  return simNftContract;
};

const faucetContract = async () => {
  const faucetContract = new web3.eth.Contract(
    faucetAbi.abi,
    "0x3629bEb51c9BC2cd0d72aAf39B2A107C08C71AEf"
  );
  return faucetContract;
};

const icoContract = async () => {
  const icoContract = new web3.eth.Contract(
    icoAbi.abi,
    "0xCA4C06De8B48393De26146Fc5A96F25A6E13247E"
  );
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

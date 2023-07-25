import React, { useState, useEffect } from "react";
import { Web3 } from "web3";
import {
  maketplaceContract,
  marketplaceAddress,
  simNftContract,
  simNftAddress,
  simTokeContract,
} from "../../abis/abis";

const Maketplace = () => {
  const web3 = new Web3(window.ethereum);
  let [nfts, setNfts] = useState([]);
  let [account0, setAccount0] = useState();

  useEffect(() => {
    const getSimItems = async () => {
      const MaketplaceContract = await maketplaceContract();
      const nfts = await MaketplaceContract.methods.getListedNft().call();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      let account0 = web3.utils.toChecksumAddress(accounts[0]);
      setAccount0(account0);
      await setNfts(nfts);
    };

    getSimItems();
  }, []);

  const Card = ({ nft }) => {
    const unListNft = async () => {
      try {
        const MaketplaceContract = await maketplaceContract();
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await MaketplaceContract.methods
          .unlistNft(nft.tokenId)
          .send({ from: accounts[0] });
      } catch (err) {
        console.error(err.message);
      }
    };

    const buyNft = async () => {
      try {
        const MaketplaceContract = await maketplaceContract();
        const SimTokeContract = await simTokeContract();
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        let allowance = await SimTokeContract.methods
          .allowance(accounts[0], marketplaceAddress)
          .call();
        let allowanceFromWei = await Number(
          web3.utils.fromWei(allowance, "ether")
        );
        let price = nft.price;

        if (allowanceFromWei < price) {
          await approve(price);
          await MaketplaceContract.methods
            .buyNft(nft.tokenId, price)
            .send({ from: accounts[0] });
        } else {
          await MaketplaceContract.methods
            .buyNft(nft.tokenId, price)
            .send({ from: accounts[0] });
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    const approve = async (price) => {
      try {
        const SimTokeContract = await simTokeContract();
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await SimTokeContract.methods
          .approve(marketplaceAddress, price)
          .send({ from: accounts[0] });
      } catch (err) {
        console.error(err.message);
      }
    };
    return (
      <div className="max-w-[250px] shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3  ">
        <img src={nft.tokenPNG} alt="tokenPNG" />
        <div className="grid gap-3">
          <div className="flex mt-5">
            <h4 className="text-white font-semibold w-1/2 ">
              Sim # {Number(nft.tokenId)}
            </h4>
            <h4 className="text-white font-semibold w-1/2 text-right ">
              {Number(nft.price)} Sim
            </h4>
          </div>

          {nft.author == account0 ? (
            <button
              onClick={unListNft}
              className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
              hover:bg-[#bd255f] cursor-pointer rounded-full px-4 py-1"
            >
              Unlist
            </button>
          ) : (
            <button
              onClick={buyNft}
              className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
              hover:bg-[#bd255f] cursor-pointer rounded-full px-4 py-1"
            >
              Buy
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen gradient-bg-hero">
      <div className="w-4/5 py-10 mx-auto  ">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient  text-center">
          Sim Items
        </h4>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3  py-2.5 justify-items-center ">
          {nfts.map((nft, i) => (
            <Card key={i} nft={nft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maketplace;

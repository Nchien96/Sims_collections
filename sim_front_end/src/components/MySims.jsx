import React from "react";

const MySims = () => {
  const Card = ({ nft }) => (
    <div className="max-w-[250px] shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
      <img
        src="https://teal-frozen-skink-642.mypinata.cloud/ipfs/QmNVay8d15A3jRgwLRWxoFGWF1vNXPSBrnBfUwzzAmXNrz/2.png"
        alt=""
      />
      <div className="flex justify-between mt-5">
        <h4 className="text-white font-semibold">Sim #{nft}</h4>
        <button
          className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
            hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
        >
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto ">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient  text-center">
          My Sims
        </h4>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3  py-2.5">
          {Array(4)
            .fill()
            .map((nft, i) => (
              <Card key={i} nft={nft} />
            ))}
        </div>
      </div>

      <div className="text-center">
        <button
          className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f]
            rounded-full cursor-pointer p-2"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default MySims;

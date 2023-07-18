import React from "react";

const Donate = () => {
  return (
    <div className="h-screen gradient-bg-hero">
      <div
        className="flex flex-col md:flex-row w-4/5 justify-center 
 mx-auto  py-10 h-screen items-center"
      >
        <div className="">
          <div className=" text-white text-4xl mb-5">
            Current Balance: <strong> Token</strong>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl min-w-max ">
              Donate
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl  min-w-max">
              Withdraw
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-2xl min-w-max ">
              Token Faucet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;

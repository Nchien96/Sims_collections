import React from "react";
import { Link } from "react-router-dom";
import simLogo from "../assets/sim.png";
const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.25] justify-center items-center">
          <img src={simLogo} alt="logo" className="w-32" />
        </div>

        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <Link
            to="/"
            className="text-white text-2xl text-center mx-2 cursor-pointer "
          >
            Home
          </Link>
          <Link
            to="/Ico"
            className="text-white text-2xl text-center mx-2 cursor-pointer"
          >
            Ico
          </Link>
          <Link
            to="/Maketplace"
            className="text-white text-2xl text-center mx-2 cursor-pointer"
          >
            Maketplace
          </Link>
          <Link
            to="/Faucet"
            className="text-white text-2xl text-center mx-2 cursor-pointer"
          >
            Faucet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

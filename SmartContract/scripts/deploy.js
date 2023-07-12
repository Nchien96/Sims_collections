const Config = require("./config");
const { ethers, hardhatArguments } = require("hardhat");
async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : "dev";
  const [deployer] = await ethers.getSigners();

  // // CryptoSimsToken Deploy
  // console.log("deploy from address: ", deployer.address);
  // const sim = await ethers.deployContract("CryptoSims");
  // const tokenAddress = await sim.getAddress();
  // console.log("CryptoSimsToken address:", tokenAddress);
  // Config.setConfig(network + ".SimsToken", tokenAddress);

  // //Vault Deploy
  // console.log("deploy from address: ", deployer.address);
  // const vault = await ethers.deployContract("Vault");
  // const vaultAddress = await vault.getAddress();
  // console.log("Vault Address:", vaultAddress);
  // Config.setConfig(network + ".Vault", vaultAddress);

  // // USDT Deploy
  // console.log("deploy from address: ", deployer.address);
  // const usdt = await ethers.deployContract("USDT");
  // const usdtAddress = await usdt.getAddress();
  // console.log("USDT address:", usdtAddress);
  // Config.setConfig(network + ".USDT", usdtAddress);

  // // simsCrowdSale Deploy
  // console.log("deploy from address: ", deployer.address);
  // const ico = await ethers.deployContract("SIMSCrowdSale", [
  //   1000,
  //   100,
  //   "0x98Adf81933909Cd32fA9E59a8C5bC82E99C5f3e4",
  //   " ",
  // ]);
  // const icoAddress = await ico.getAddress();
  // console.log("SIMSCrowdSale address:", icoAddress);
  // Config.setConfig(network + ".ICO", icoAddress);

  // // Sims Deploy
  // console.log("deploy from address: ", deployer.address);
  // const Sims = await ethers.deployContract("Sim");
  // const usdtAddress = await Sims.getAddress();
  // console.log("Sims address:", usdtAddress);
  // Config.setConfig(network + ".Sims", usdtAddress);

  // // SimMarketPlace Deploy
  // console.log("deploy from address: ", deployer.address);
  // const SimMarketplace = await ethers.deployContract("SimMarketplace", [
  //   "0xFf028FdB776f7a03A397eEb6c0f8de0feE04dC98",
  //   "0xaCE7f7970BCb344fEA5387e4ecEd6EC0559A3C7D",
  // ]);
  // const MarketplaceAddress = await SimMarketplace.getAddress();
  // console.log("Marketplace address:", MarketplaceAddress);
  // Config.setConfig(network + ".SimMarketplace", MarketplaceAddress);

  // Auction Deploy
  console.log("deploy from address: ", deployer.address);
  const Auction = await ethers.deployContract("Auction", [
    "0xFf028FdB776f7a03A397eEb6c0f8de0feE04dC98",
    "0xaCE7f7970BCb344fEA5387e4ecEd6EC0559A3C7D",
  ]);
  const AuctionAddress = await Auction.getAddress();
  console.log("Marketplace address:", AuctionAddress);
  Config.setConfig(network + ".Auction", AuctionAddress);

  await Config.updateConfig();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// const DatauriParser = require('datauri/parser');
// const parser = new DatauriParser();

async function main() {
  const tokenAddress = "0x3209cfA0608Ad64419aEB2071256173524357836";
  const signer = await hre.ethers.getSigner()
  const signerAddress = await signer.getAddress()
  const Token = await hre.ethers.getContractAt("AllSpark", tokenAddress, signer);

  console.log(await Token.name());
  // const mintToken = await Token['mint(address, uint256)'](signerAddress, 100);
  const transaction = await Token.unpause();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
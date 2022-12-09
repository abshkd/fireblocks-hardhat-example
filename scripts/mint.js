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
  const tokenAddress = "0x3390ca8Fa6AC096B3Dc4C727E3222c547072d3E8";
  const signer = await hre.ethers.getSigner()
  const signerAddress = await signer.getAddress()
  const Token = await hre.ethers.getContractAt("MyToken", tokenAddress, signer);

  const name = await Token.name()
  const symbol = await Token.symbol()

  const amountToMint = hre.ethers.utils.parseEther("100");

  console.log(`${name} (${symbol})`);
  console.log(`Mint ${symbol}`)
  const mint = await Token.mint("0x1ecb16D2145C175C8277a3fd29aFdB859b16B85C", amountToMint)
  
  console.log(mint)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

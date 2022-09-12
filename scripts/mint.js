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
  const tokenAddress = "0xF17E26c8Eb2c3FC35CB4730f8b6CD872ff6bC609";
  const signer = await hre.ethers.getSigner()
  const signerAdderss = await signer.getAddress()
  const token = await hre.ethers.getContractAt("Token", tokenAddress);
//   const tokenData = {
//     "name": "SpaceBunny #1",
//     "image": "https://i.ibb.co/m8fsvgC/spcb-6.jpg",
//   }

//   const tokenURI = parser.format('.json', JSON.stringify(tokenData)).content
  
//   const tx = await spaceBunnies.safeMint(signerAdderss, tokenURI);
//   await tx.wait()

//   console.log("A new Space Bunny NFT has been minted to:", signerAdderss);
  // console.log("tokenURI:", await spaceBunnies.tokenURI(0))

  console.log(await token.name());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
require("@nomicfoundation/hardhat-toolbox");
require("@fireblocks/hardhat-fireblocks");
// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    goerli: {
      url: `https://rpc.ankr.com/eth_goerli`,
      fireblocks: {
        privateKey: './fireblocks_secret.key',
        apiKey: '2f330fe0-56a8-9c0d-8bdc-c3a34ea31240',
        vaultAccountIds: 3
      }
    }
  }
};

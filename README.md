# Hardhat Boilerplate with Fireblocks


## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/abshkd/hardhat-boilerplate.git
cd hardhat-boilerplate
npm install
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

### To deploy to a network
For Fireblocks deployment, configure the `hardhat.config.js` for your target network as per the sample below.
```
goerli: {
      url: `https://rpc.ankr.com/eth_goerli`,
      
      fireblocks: {
        privateKey: process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH,
        apiKey: process.env.FIREBLOCKS_API_KEY,
        vaultAccountIds: process.env.FIREBLOCKS_VAULT_ACCOUNT_IDS
      }
```
Note: That the Vault ID here must have the Policy to allow `Contract Call`.
You also need to have the `API USER` with relevant role for making the Contract call.
Refer to [Help Center](https://support.fireblocks.io/hc/en-us/) for latest information.

Compile the contracts
```sh
npx hardhat compile
```

Deploy the contract, e.g. erc1155.sol
```sh
npx hardhat scripts/deploy-erc1155.js --network goerli
```

Look at the `examples` directory for e.g. of using DefiSDK to interact with the smart contract. You need to install `ts-node`
```sh
npm install -g ts-node
```

Update the smart contact address in `examples\<script-name>.ts` to match any contract on chain. Then we can run the script
```sh
ts-node examples\<scriptname>.ts
```
Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```


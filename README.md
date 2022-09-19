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

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```


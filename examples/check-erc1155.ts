// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

import {BridgeParams, Chain, ERC1155, FireblocksSDK} from "fireblocks-defi-sdk";

dotenv.config({ path: __dirname+'/../.env' });

async function main() {
  const tokenAddress = "0xA6c815cA078348655eCBdacb91fFc1E3249190dE"; //ERC 1155 deployed contract
  
   /** Fireblocks Initialization **/
    const apiKey = process.env.FIREBLOCKS_API_KEY || "";


    // Read file containing you Fireblocks Api Private key
    const privateKey = fs.readFileSync( process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH || "", "utf-8");

    // Initialize Fireblocks SDK
    const fireblocksApiClient: FireblocksSDK = new FireblocksSDK(privateKey, apiKey);

    // Build Bridge parameters to you Fireblocks account.
    const bridgeParams : BridgeParams = {
        fireblocksApiClient,
        vaultAccountId: process.env.FIREBLOCKS_VAULT_ACCOUNT_IDS || "0",
        contractAddress: tokenAddress,
        chain: Chain.GOERLI
    }

    const goldId = 0; //gold
    const swordId = 3; //sword
    const gameItemsToken = new ERC1155(bridgeParams);
    const goldBalance = await gameItemsToken.balanceOf(goldId);
    const swordBalance = await gameItemsToken.balanceOf(swordId);
    console.log(`Gold Blance ${goldBalance}`);
    console.log(`Sword Blance ${swordBalance}`);

    const collectItems = [goldId]; //array of item Ids
    const amountSend = [10]; // array of amounts corresponding to ItemIds
    const friend = '0x017f5e28CeEc66E09Ecb0976DFbeAE9d7Df15cb2';
    const sendStuffToFriends = await gameItemsToken.safeBatchTransferFrom(friend, collectItems, amountSend); // will initiate TAP and signing
    console.log(sendStuffToFriends);
    
    // You need to wait and check if transaction is completed and broadcasted to get the new balances

    const goldBalanceNew = await gameItemsToken.balanceOf(goldId);
    const swordBalanceNew = await gameItemsToken.balanceOf(swordId);
    console.log(`Gold Blance ${goldBalanceNew}`);
    console.log(`Sword Blance ${swordBalanceNew}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
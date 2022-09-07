//import { ethers, upgrades, waffle } from "hardhat";
import { ethers, waffle } from "hardhat";
import { Overrides, Signer, BigNumberish, utils, Wallet } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";

import {
  IWeth,
  IWeth__factory,
  WETH,
  WETH__factory,
  IERC20,
  IERC20__factory,
  CErc20,
  CErc20__factory,
} from '../typechain/'


async function main() {
  let Panda: Signer; //Hardhat Funded account
  let Grizzly: Signer; //Eth Mainnet Private Key(?)
  [Panda, Grizzly] = (await ethers.getSigners());

  let PandaAddr = await Panda.getAddress();
  let GrizzlyAddr = await Grizzly.getAddress();
  //const provider = ethers.provider;
  console.log("[*] Panda Addr : %s", PandaAddr);
  console.log("[*] Panda ETH : %s", ethers.utils.formatEther(await Panda.getBalance()));
  console.log("[*] Grizzly Addr : %s", GrizzlyAddr);
  console.log("[*] Grizzly ETH : %f", ethers.utils.formatEther(await Grizzly.getBalance()));

  //STEP#1 : Convert Panda's ETH to WETH
  const WETH = await ethers.getContractAt("IERC20",'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');

  console.log("[*] Panda connect to WETH");
  const WETH_Panda = WETH__factory.connect('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', Panda);

  //console.log("[*] approve");
  //await WETH_Panda.approve('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', ethers.utils.parseEther('30000.0'));

  console.log("[*] Panda deplosit ETH in WETH Contract");
  await WETH_Panda.deposit({value:ethers.utils.parseEther('10000.0')});
  
  console.log("[*] Panda ETH : %f", ethers.utils.formatEther(await Panda.getBalance()));
  console.log("[*] Panda WETH : %f", ethers.utils.formatEther(await WETH_Panda.balanceOf(PandaAddr)));

  //STEP#2 : Supply cyWETH with Panda's WETH
  //cyWETH address was discovered based on debugging the IronBank app with 
  //chrome developer tool
  //cyWETH address : "0x41c84c0e2EE0b740Cf0d31F63f3B6F627DC6b393"
  //Supply(approve and supply) function is related to app's cream.ts 
  //async supply(
  //  market: Market,
  //  amount: BigNumber,
  //  isNative: boolean
  //): Promise<TransactionResponse> {
  //  let cTokenInterface: AbstractCToken;
  //
  //  if (isNative) {
  //    cTokenInterface = new CEther(market.address, this.provider);
  //  } else {
  //    cTokenInterface = new CErc20(market.address, this.provider);
  //  }
  //  return cTokenInterface.mint(amount);
  //}

  //STEP#2-0 : Panda connect to cyWETH
  //STEP#2-1 : approve button
  //STEP#2-2 : supply button
}//end of main

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
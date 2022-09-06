import { ethers, upgrades, waffle } from "hardhat";
import { Overrides, Signer, BigNumberish, utils, Wallet } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";

import {
  IWeth,
  IWeth__factory,
  WETH,
  WETH__factory
} from '../typechain/'


async function main() {
  let Panda: Signer //Hardhat Funded account
  let Grizzly: Signer //
  const WETH = await ethers.getContractAt("IERC20",'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');

}//end of main

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
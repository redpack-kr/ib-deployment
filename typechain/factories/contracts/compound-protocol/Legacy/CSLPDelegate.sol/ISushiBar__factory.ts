/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISushiBar,
  ISushiBarInterface,
} from "../../../../../contracts/compound-protocol/Legacy/CSLPDelegate.sol/ISushiBar";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "enter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "leave",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISushiBar__factory {
  static readonly abi = _abi;
  static createInterface(): ISushiBarInterface {
    return new utils.Interface(_abi) as ISushiBarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISushiBar {
    return new Contract(address, _abi, signerOrProvider) as ISushiBar;
  }
}

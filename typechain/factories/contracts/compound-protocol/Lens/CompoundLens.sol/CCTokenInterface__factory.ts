/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CCTokenInterface,
  CCTokenInterfaceInterface,
} from "../../../../../contracts/compound-protocol/Lens/CompoundLens.sol/CCTokenInterface";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimComp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class CCTokenInterface__factory {
  static readonly abi = _abi;
  static createInterface(): CCTokenInterfaceInterface {
    return new utils.Interface(_abi) as CCTokenInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CCTokenInterface {
    return new Contract(address, _abi, signerOrProvider) as CCTokenInterface;
  }
}

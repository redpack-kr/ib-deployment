/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  WrappedNativeInterface,
  WrappedNativeInterfaceInterface,
} from "../../../../contracts/compound-protocol/CWrappedNative.sol/WrappedNativeInterface";

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class WrappedNativeInterface__factory {
  static readonly abi = _abi;
  static createInterface(): WrappedNativeInterfaceInterface {
    return new utils.Interface(_abi) as WrappedNativeInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrappedNativeInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WrappedNativeInterface;
  }
}

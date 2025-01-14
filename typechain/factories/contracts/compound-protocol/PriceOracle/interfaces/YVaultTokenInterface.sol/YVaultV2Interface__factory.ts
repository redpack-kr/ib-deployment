/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  YVaultV2Interface,
  YVaultV2InterfaceInterface,
} from "../../../../../../contracts/compound-protocol/PriceOracle/interfaces/YVaultTokenInterface.sol/YVaultV2Interface";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "pricePerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class YVaultV2Interface__factory {
  static readonly abi = _abi;
  static createInterface(): YVaultV2InterfaceInterface {
    return new utils.Interface(_abi) as YVaultV2InterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YVaultV2Interface {
    return new Contract(address, _abi, signerOrProvider) as YVaultV2Interface;
  }
}

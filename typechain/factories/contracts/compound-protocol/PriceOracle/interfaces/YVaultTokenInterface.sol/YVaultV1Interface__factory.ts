/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  YVaultV1Interface,
  YVaultV1InterfaceInterface,
} from "../../../../../../contracts/compound-protocol/PriceOracle/interfaces/YVaultTokenInterface.sol/YVaultV1Interface";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getPricePerFullShare",
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

export class YVaultV1Interface__factory {
  static readonly abi = _abi;
  static createInterface(): YVaultV1InterfaceInterface {
    return new utils.Interface(_abi) as YVaultV1InterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YVaultV1Interface {
    return new Contract(address, _abi, signerOrProvider) as YVaultV1Interface;
  }
}

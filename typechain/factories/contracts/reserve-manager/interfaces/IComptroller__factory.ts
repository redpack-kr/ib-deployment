/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IComptroller,
  IComptrollerInterface,
} from "../../../../contracts/reserve-manager/interfaces/IComptroller";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "cTokenAddress",
        type: "address",
      },
    ],
    name: "isMarketListed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IComptroller__factory {
  static readonly abi = _abi;
  static createInterface(): IComptrollerInterface {
    return new utils.Interface(_abi) as IComptrollerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IComptroller {
    return new Contract(address, _abi, signerOrProvider) as IComptroller;
  }
}

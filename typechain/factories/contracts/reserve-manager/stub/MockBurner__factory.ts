/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockBurner,
  MockBurnerInterface,
} from "../../../../contracts/reserve-manager/stub/MockBurner";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "coin",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101e7806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806389afcb4414610030575b600080fd5b61004361003e366004610146565b610055565b60405190815260200160405180910390f35b6040516370a0823160e01b815233600482015260009081906001600160a01b038416906370a0823190602401602060405180830381865afa15801561009e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c29190610176565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091506001600160a01b038416906323b872dd906064016020604051808303816000875af1158015610118573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013c919061018f565b5060009392505050565b60006020828403121561015857600080fd5b81356001600160a01b038116811461016f57600080fd5b9392505050565b60006020828403121561018857600080fd5b5051919050565b6000602082840312156101a157600080fd5b8151801515811461016f57600080fdfea26469706673582212207495c764f56e942cebdd4af17cc86f52a5c1228ee7c6de44b81587d9c6ca9e3d64736f6c634300080b0033";

type MockBurnerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockBurnerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockBurner__factory extends ContractFactory {
  constructor(...args: MockBurnerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockBurner> {
    return super.deploy(overrides || {}) as Promise<MockBurner>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockBurner {
    return super.attach(address) as MockBurner;
  }
  override connect(signer: Signer): MockBurner__factory {
    return super.connect(signer) as MockBurner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockBurnerInterface {
    return new utils.Interface(_abi) as MockBurnerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockBurner {
    return new Contract(address, _abi, signerOrProvider) as MockBurner;
  }
}

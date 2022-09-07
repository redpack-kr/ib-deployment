/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockCTokenAdmin,
  MockCTokenAdminInterface,
} from "../../../../contracts/reserve-manager/stub/MockCTokenAdmin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "reduceAmount",
        type: "uint256",
      },
    ],
    name: "extractReserves",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610499806100206000396000f3fe6080604052600436106100225760003560e01c806307da3c1d1461002e57600080fd5b3661002957005b600080fd5b34801561003a57600080fd5b5061004e610049366004610304565b610050565b005b6100dc826001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610091573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526100b99190810190610376565b604051806040016040528060058152602001640c6e48aa8960db1b815250610293565b1561016d57604051339082156108fc029083906000818181858888f1935050505015801561010e573d6000803e3d6000fd5b506040516307e2795960e01b8152600481018290526001600160a01b038316906307e2795990602401600060405180830381600087803b15801561015157600080fd5b505af1158015610165573d6000803e3d6000fd5b505050505050565b6000826001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610423565b6040516340c10f1960e01b8152336004820152602481018490529091506001600160a01b038216906340c10f1990604401600060405180830381600087803b15801561021c57600080fd5b505af1158015610230573d6000803e3d6000fd5b50506040516307e2795960e01b8152600481018590526001600160a01b03861692506307e279599150602401600060405180830381600087803b15801561027657600080fd5b505af115801561028a573d6000803e3d6000fd5b50505050505050565b6000816040516020016102a69190610447565b60405160208183030381529060405280519060200120836040516020016102cd9190610447565b6040516020818303038152906040528051906020012014905092915050565b6001600160a01b038116811461030157600080fd5b50565b6000806040838503121561031757600080fd5b8235610322816102ec565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610361578181015183820152602001610349565b83811115610370576000848401525b50505050565b60006020828403121561038857600080fd5b815167ffffffffffffffff808211156103a057600080fd5b818401915084601f8301126103b457600080fd5b8151818111156103c6576103c6610330565b604051601f8201601f19908116603f011681019083821181831017156103ee576103ee610330565b8160405282815287602084870101111561040757600080fd5b610418836020830160208801610346565b979650505050505050565b60006020828403121561043557600080fd5b8151610440816102ec565b9392505050565b60008251610459818460208701610346565b919091019291505056fea26469706673582212208038d5f20bf792f3a66459b895ab1ae79c8b5be19a42c727719b50a8d5e4fc1464736f6c634300080b0033";

type MockCTokenAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockCTokenAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockCTokenAdmin__factory extends ContractFactory {
  constructor(...args: MockCTokenAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockCTokenAdmin> {
    return super.deploy(overrides || {}) as Promise<MockCTokenAdmin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockCTokenAdmin {
    return super.attach(address) as MockCTokenAdmin;
  }
  override connect(signer: Signer): MockCTokenAdmin__factory {
    return super.connect(signer) as MockCTokenAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCTokenAdminInterface {
    return new utils.Interface(_abi) as MockCTokenAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCTokenAdmin {
    return new Contract(address, _abi, signerOrProvider) as MockCTokenAdmin;
  }
}
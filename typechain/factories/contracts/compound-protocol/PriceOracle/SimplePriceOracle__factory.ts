/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SimplePriceOracle,
  SimplePriceOracleInterface,
} from "../../../../contracts/compound-protocol/PriceOracle/SimplePriceOracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousPriceMantissa",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestedPriceMantissa",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPriceMantissa",
        type: "uint256",
      },
    ],
    name: "PricePosted",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "assetPrices",
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
    inputs: [
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setDirectPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "underlyingPriceMantissa",
        type: "uint256",
      },
    ],
    name: "setUnderlyingPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610585806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309a8acb014610051578063127ffda01461007f5780635e9a523c146100ab578063fc57d4df146100e3575b600080fd5b61007d6004803603604081101561006757600080fd5b506001600160a01b038135169060200135610109565b005b61007d6004803603604081101561009557600080fd5b506001600160a01b038135169060200135610181565b6100d1600480360360208110156100c157600080fd5b50356001600160a01b0316610263565b60408051918252519081900360200190f35b6100d1600480360360208110156100f957600080fd5b50356001600160a01b0316610282565b6001600160a01b038216600081815260208181526040918290205482519384529083015281810183905260608201839052517fdd71a1d19fcba687442a1d5c58578f1e409af71a79d10fd95a4d66efd8fa9ae79181900360800190a16001600160a01b03909116600090815260208190526040902055565b6000826001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156101bc57600080fd5b505afa1580156101d0573d6000803e3d6000fd5b505050506040513d60208110156101e657600080fd5b50516001600160a01b038116600081815260208181526040918290205482519384529083015281810185905260608201859052519192507fdd71a1d19fcba687442a1d5c58578f1e409af71a79d10fd95a4d66efd8fa9ae7919081900360800190a16001600160a01b031660009081526020819052604090205550565b6001600160a01b0381166000908152602081905260409020545b919050565b60006103cc826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156102c057600080fd5b505afa1580156102d4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156102fd57600080fd5b810190808051604051939291908464010000000082111561031d57600080fd5b90830190602082018581111561033257600080fd5b825164010000000081118282018810171561034c57600080fd5b82525081516020918201929091019080838360005b83811015610379578181015183820152602001610361565b50505050905090810190601f1680156103a65780820380516001836020036101000a031916815260200191505b5060408181019052600781526663724d4154494360c81b60208201529250610469915050565b156103e05750670de0b6b3a764000061027d565b600080836001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b15801561041c57600080fd5b505afa158015610430573d6000803e3d6000fd5b505050506040513d602081101561044657600080fd5b50516001600160a01b03168152602081019190915260400160002054905061027d565b6000816040516020018082805190602001908083835b6020831061049e5780518252601f19909201916020918201910161047f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120836040516020018082805190602001908083835b6020831061050c5780518252601f1990920191602091820191016104ed565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001201490509291505056fea265627a7a72315820174c19dc8307ce0d877c373a363435b8849b758388d7c4e9df895273233c439864736f6c63430005110032";

type SimplePriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimplePriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimplePriceOracle__factory extends ContractFactory {
  constructor(...args: SimplePriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimplePriceOracle> {
    return super.deploy(overrides || {}) as Promise<SimplePriceOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimplePriceOracle {
    return super.attach(address) as SimplePriceOracle;
  }
  override connect(signer: Signer): SimplePriceOracle__factory {
    return super.connect(signer) as SimplePriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimplePriceOracleInterface {
    return new utils.Interface(_abi) as SimplePriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimplePriceOracle {
    return new Contract(address, _abi, signerOrProvider) as SimplePriceOracle;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface FeedRegistryInterfaceInterface extends utils.Interface {
  functions: {
    "decimals(address,address)": FunctionFragment;
    "description(address,address)": FunctionFragment;
    "getFeed(address,address)": FunctionFragment;
    "getRoundData(address,address,uint80)": FunctionFragment;
    "isFeedEnabled(address)": FunctionFragment;
    "latestRoundData(address,address)": FunctionFragment;
    "version(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "decimals"
      | "description"
      | "getFeed"
      | "getRoundData"
      | "isFeedEnabled"
      | "latestRoundData"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "decimals",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeed",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isFeedEnabled",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "version",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFeedEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {};
}

export interface FeedRegistryInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FeedRegistryInterfaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    decimals(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    description(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { aggregator: string }>;

    getRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    isFeedEnabled(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    latestRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    version(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  decimals(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  description(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getFeed(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoundData(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    _roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  isFeedEnabled(
    aggregator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  latestRoundData(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  version(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    decimals(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    description(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    isFeedEnabled(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    latestRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    version(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    decimals(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    description(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFeedEnabled(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decimals(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    description(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFeedEnabled(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

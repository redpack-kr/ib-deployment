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
} from "../../../../../common";

export declare namespace StdReferenceInterface {
  export type ReferenceDataStruct = {
    rate: PromiseOrValue<BigNumberish>;
    lastUpdatedBase: PromiseOrValue<BigNumberish>;
    lastUpdatedQuote: PromiseOrValue<BigNumberish>;
  };

  export type ReferenceDataStructOutput = [BigNumber, BigNumber, BigNumber] & {
    rate: BigNumber;
    lastUpdatedBase: BigNumber;
    lastUpdatedQuote: BigNumber;
  };
}

export interface StdReferenceInterfaceInterface extends utils.Interface {
  functions: {
    "getRefenceDataBulk(string[],string[])": FunctionFragment;
    "getReferenceData(string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRefenceDataBulk" | "getReferenceData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRefenceDataBulk",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferenceData",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRefenceDataBulk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferenceData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StdReferenceInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StdReferenceInterfaceInterface;

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
    getRefenceDataBulk(
      _bases: PromiseOrValue<string>[],
      _quotes: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[StdReferenceInterface.ReferenceDataStructOutput[]]>;

    getReferenceData(
      _base: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[StdReferenceInterface.ReferenceDataStructOutput]>;
  };

  getRefenceDataBulk(
    _bases: PromiseOrValue<string>[],
    _quotes: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<StdReferenceInterface.ReferenceDataStructOutput[]>;

  getReferenceData(
    _base: PromiseOrValue<string>,
    _quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<StdReferenceInterface.ReferenceDataStructOutput>;

  callStatic: {
    getRefenceDataBulk(
      _bases: PromiseOrValue<string>[],
      _quotes: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<StdReferenceInterface.ReferenceDataStructOutput[]>;

    getReferenceData(
      _base: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<StdReferenceInterface.ReferenceDataStructOutput>;
  };

  filters: {};

  estimateGas: {
    getRefenceDataBulk(
      _bases: PromiseOrValue<string>[],
      _quotes: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferenceData(
      _base: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRefenceDataBulk(
      _bases: PromiseOrValue<string>[],
      _quotes: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReferenceData(
      _base: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

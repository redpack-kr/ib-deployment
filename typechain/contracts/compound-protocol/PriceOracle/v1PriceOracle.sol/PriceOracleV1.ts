/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface PriceOracleV1Interface extends utils.Interface {
  functions: {
    "_acceptAnchorAdmin()": FunctionFragment;
    "_assetPrices(address)": FunctionFragment;
    "_setPaused(bool)": FunctionFragment;
    "_setPendingAnchor(address,uint256)": FunctionFragment;
    "_setPendingAnchorAdmin(address)": FunctionFragment;
    "anchorAdmin()": FunctionFragment;
    "anchors(address)": FunctionFragment;
    "assetPrices(address)": FunctionFragment;
    "getPrice(address)": FunctionFragment;
    "maxSwing()": FunctionFragment;
    "maxSwingMantissa()": FunctionFragment;
    "numBlocksPerPeriod()": FunctionFragment;
    "paused()": FunctionFragment;
    "pendingAnchorAdmin()": FunctionFragment;
    "pendingAnchors(address)": FunctionFragment;
    "poster()": FunctionFragment;
    "setPrice(address,uint256)": FunctionFragment;
    "setPrices(address[],uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_acceptAnchorAdmin"
      | "_assetPrices"
      | "_setPaused"
      | "_setPendingAnchor"
      | "_setPendingAnchorAdmin"
      | "anchorAdmin"
      | "anchors"
      | "assetPrices"
      | "getPrice"
      | "maxSwing"
      | "maxSwingMantissa"
      | "numBlocksPerPeriod"
      | "paused"
      | "pendingAnchorAdmin"
      | "pendingAnchors"
      | "poster"
      | "setPrice"
      | "setPrices"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_acceptAnchorAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_assetPrices",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_setPaused",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "_setPendingAnchor",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_setPendingAnchorAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "anchorAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "anchors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "assetPrices",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "maxSwing", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxSwingMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numBlocksPerPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingAnchorAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAnchors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "poster", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrices",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "_acceptAnchorAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_assetPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_setPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_setPendingAnchor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setPendingAnchorAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "anchorAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "anchors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxSwing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxSwingMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numBlocksPerPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAnchorAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAnchors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poster", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPrices", data: BytesLike): Result;

  events: {
    "CappedPricePosted(address,uint256,uint256,uint256)": EventFragment;
    "Failure(uint256,uint256,uint256)": EventFragment;
    "NewAnchorAdmin(address,address)": EventFragment;
    "NewPendingAnchor(address,address,uint256,uint256)": EventFragment;
    "NewPendingAnchorAdmin(address,address)": EventFragment;
    "OracleFailure(address,address,uint256,uint256,uint256)": EventFragment;
    "PricePosted(address,uint256,uint256,uint256)": EventFragment;
    "SetPaused(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CappedPricePosted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Failure"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAnchorAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingAnchor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingAnchorAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleFailure"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PricePosted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPaused"): EventFragment;
}

export interface CappedPricePostedEventObject {
  asset: string;
  requestedPriceMantissa: BigNumber;
  anchorPriceMantissa: BigNumber;
  cappedPriceMantissa: BigNumber;
}
export type CappedPricePostedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  CappedPricePostedEventObject
>;

export type CappedPricePostedEventFilter =
  TypedEventFilter<CappedPricePostedEvent>;

export interface FailureEventObject {
  error: BigNumber;
  info: BigNumber;
  detail: BigNumber;
}
export type FailureEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  FailureEventObject
>;

export type FailureEventFilter = TypedEventFilter<FailureEvent>;

export interface NewAnchorAdminEventObject {
  oldAnchorAdmin: string;
  newAnchorAdmin: string;
}
export type NewAnchorAdminEvent = TypedEvent<
  [string, string],
  NewAnchorAdminEventObject
>;

export type NewAnchorAdminEventFilter = TypedEventFilter<NewAnchorAdminEvent>;

export interface NewPendingAnchorEventObject {
  anchorAdmin: string;
  asset: string;
  oldScaledPrice: BigNumber;
  newScaledPrice: BigNumber;
}
export type NewPendingAnchorEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  NewPendingAnchorEventObject
>;

export type NewPendingAnchorEventFilter =
  TypedEventFilter<NewPendingAnchorEvent>;

export interface NewPendingAnchorAdminEventObject {
  oldPendingAnchorAdmin: string;
  newPendingAnchorAdmin: string;
}
export type NewPendingAnchorAdminEvent = TypedEvent<
  [string, string],
  NewPendingAnchorAdminEventObject
>;

export type NewPendingAnchorAdminEventFilter =
  TypedEventFilter<NewPendingAnchorAdminEvent>;

export interface OracleFailureEventObject {
  msgSender: string;
  asset: string;
  error: BigNumber;
  info: BigNumber;
  detail: BigNumber;
}
export type OracleFailureEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  OracleFailureEventObject
>;

export type OracleFailureEventFilter = TypedEventFilter<OracleFailureEvent>;

export interface PricePostedEventObject {
  asset: string;
  previousPriceMantissa: BigNumber;
  requestedPriceMantissa: BigNumber;
  newPriceMantissa: BigNumber;
}
export type PricePostedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  PricePostedEventObject
>;

export type PricePostedEventFilter = TypedEventFilter<PricePostedEvent>;

export interface SetPausedEventObject {
  newState: boolean;
}
export type SetPausedEvent = TypedEvent<[boolean], SetPausedEventObject>;

export type SetPausedEventFilter = TypedEventFilter<SetPausedEvent>;

export interface PriceOracleV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PriceOracleV1Interface;

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
    _acceptAnchorAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _assetPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mantissa: BigNumber }>;

    _setPaused(
      requestedState: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _setPendingAnchor(
      asset: PromiseOrValue<string>,
      newScaledPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _setPendingAnchorAdmin(
      newPendingAnchorAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    anchorAdmin(overrides?: CallOverrides): Promise<[string]>;

    anchors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { period: BigNumber; priceMantissa: BigNumber }
    >;

    assetPrices(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrice(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxSwing(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mantissa: BigNumber }>;

    maxSwingMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    numBlocksPerPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingAnchorAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingAnchors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poster(overrides?: CallOverrides): Promise<[string]>;

    setPrice(
      asset: PromiseOrValue<string>,
      requestedPriceMantissa: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPrices(
      assets: PromiseOrValue<string>[],
      requestedPriceMantissas: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _acceptAnchorAdmin(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _assetPrices(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _setPaused(
    requestedState: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _setPendingAnchor(
    asset: PromiseOrValue<string>,
    newScaledPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _setPendingAnchorAdmin(
    newPendingAnchorAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  anchorAdmin(overrides?: CallOverrides): Promise<string>;

  anchors(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { period: BigNumber; priceMantissa: BigNumber }
  >;

  assetPrices(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxSwing(overrides?: CallOverrides): Promise<BigNumber>;

  maxSwingMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  numBlocksPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingAnchorAdmin(overrides?: CallOverrides): Promise<string>;

  pendingAnchors(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poster(overrides?: CallOverrides): Promise<string>;

  setPrice(
    asset: PromiseOrValue<string>,
    requestedPriceMantissa: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPrices(
    assets: PromiseOrValue<string>[],
    requestedPriceMantissas: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _acceptAnchorAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    _assetPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _setPaused(
      requestedState: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _setPendingAnchor(
      asset: PromiseOrValue<string>,
      newScaledPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _setPendingAnchorAdmin(
      newPendingAnchorAdmin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    anchorAdmin(overrides?: CallOverrides): Promise<string>;

    anchors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { period: BigNumber; priceMantissa: BigNumber }
    >;

    assetPrices(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSwing(overrides?: CallOverrides): Promise<BigNumber>;

    maxSwingMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingAnchorAdmin(overrides?: CallOverrides): Promise<string>;

    pendingAnchors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poster(overrides?: CallOverrides): Promise<string>;

    setPrice(
      asset: PromiseOrValue<string>,
      requestedPriceMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPrices(
      assets: PromiseOrValue<string>[],
      requestedPriceMantissas: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {
    "CappedPricePosted(address,uint256,uint256,uint256)"(
      asset?: null,
      requestedPriceMantissa?: null,
      anchorPriceMantissa?: null,
      cappedPriceMantissa?: null
    ): CappedPricePostedEventFilter;
    CappedPricePosted(
      asset?: null,
      requestedPriceMantissa?: null,
      anchorPriceMantissa?: null,
      cappedPriceMantissa?: null
    ): CappedPricePostedEventFilter;

    "Failure(uint256,uint256,uint256)"(
      error?: null,
      info?: null,
      detail?: null
    ): FailureEventFilter;
    Failure(error?: null, info?: null, detail?: null): FailureEventFilter;

    "NewAnchorAdmin(address,address)"(
      oldAnchorAdmin?: null,
      newAnchorAdmin?: null
    ): NewAnchorAdminEventFilter;
    NewAnchorAdmin(
      oldAnchorAdmin?: null,
      newAnchorAdmin?: null
    ): NewAnchorAdminEventFilter;

    "NewPendingAnchor(address,address,uint256,uint256)"(
      anchorAdmin?: null,
      asset?: null,
      oldScaledPrice?: null,
      newScaledPrice?: null
    ): NewPendingAnchorEventFilter;
    NewPendingAnchor(
      anchorAdmin?: null,
      asset?: null,
      oldScaledPrice?: null,
      newScaledPrice?: null
    ): NewPendingAnchorEventFilter;

    "NewPendingAnchorAdmin(address,address)"(
      oldPendingAnchorAdmin?: null,
      newPendingAnchorAdmin?: null
    ): NewPendingAnchorAdminEventFilter;
    NewPendingAnchorAdmin(
      oldPendingAnchorAdmin?: null,
      newPendingAnchorAdmin?: null
    ): NewPendingAnchorAdminEventFilter;

    "OracleFailure(address,address,uint256,uint256,uint256)"(
      msgSender?: null,
      asset?: null,
      error?: null,
      info?: null,
      detail?: null
    ): OracleFailureEventFilter;
    OracleFailure(
      msgSender?: null,
      asset?: null,
      error?: null,
      info?: null,
      detail?: null
    ): OracleFailureEventFilter;

    "PricePosted(address,uint256,uint256,uint256)"(
      asset?: null,
      previousPriceMantissa?: null,
      requestedPriceMantissa?: null,
      newPriceMantissa?: null
    ): PricePostedEventFilter;
    PricePosted(
      asset?: null,
      previousPriceMantissa?: null,
      requestedPriceMantissa?: null,
      newPriceMantissa?: null
    ): PricePostedEventFilter;

    "SetPaused(bool)"(newState?: null): SetPausedEventFilter;
    SetPaused(newState?: null): SetPausedEventFilter;
  };

  estimateGas: {
    _acceptAnchorAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _assetPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _setPaused(
      requestedState: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _setPendingAnchor(
      asset: PromiseOrValue<string>,
      newScaledPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _setPendingAnchorAdmin(
      newPendingAnchorAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    anchorAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    anchors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetPrices(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSwing(overrides?: CallOverrides): Promise<BigNumber>;

    maxSwingMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAnchorAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAnchors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poster(overrides?: CallOverrides): Promise<BigNumber>;

    setPrice(
      asset: PromiseOrValue<string>,
      requestedPriceMantissa: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPrices(
      assets: PromiseOrValue<string>[],
      requestedPriceMantissas: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _acceptAnchorAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _assetPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _setPaused(
      requestedState: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _setPendingAnchor(
      asset: PromiseOrValue<string>,
      newScaledPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _setPendingAnchorAdmin(
      newPendingAnchorAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    anchorAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    anchors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetPrices(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSwing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxSwingMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numBlocksPerPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAnchorAdmin(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingAnchors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPrice(
      asset: PromiseOrValue<string>,
      requestedPriceMantissa: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPrices(
      assets: PromiseOrValue<string>[],
      requestedPriceMantissas: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
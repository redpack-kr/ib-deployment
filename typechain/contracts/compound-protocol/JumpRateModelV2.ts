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
} from "../../common";

export interface JumpRateModelV2Interface extends utils.Interface {
  functions: {
    "baseRatePerBlock()": FunctionFragment;
    "blocksPerYear()": FunctionFragment;
    "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
    "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
    "isInterestRateModel()": FunctionFragment;
    "jumpMultiplierPerBlock()": FunctionFragment;
    "kink()": FunctionFragment;
    "multiplierPerBlock()": FunctionFragment;
    "owner()": FunctionFragment;
    "roof()": FunctionFragment;
    "updateJumpRateModel(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "utilizationRate(uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "baseRatePerBlock"
      | "blocksPerYear"
      | "getBorrowRate"
      | "getSupplyRate"
      | "isInterestRateModel"
      | "jumpMultiplierPerBlock"
      | "kink"
      | "multiplierPerBlock"
      | "owner"
      | "roof"
      | "updateJumpRateModel"
      | "utilizationRate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "baseRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blocksPerYear",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowRate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyRate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isInterestRateModel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "jumpMultiplierPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kink", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiplierPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "roof", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateJumpRateModel",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "utilizationRate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "baseRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blocksPerYear",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInterestRateModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "jumpMultiplierPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kink", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multiplierPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roof", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateJumpRateModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "utilizationRate",
    data: BytesLike
  ): Result;

  events: {
    "NewInterestParams(uint256,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewInterestParams"): EventFragment;
}

export interface NewInterestParamsEventObject {
  baseRatePerBlock: BigNumber;
  multiplierPerBlock: BigNumber;
  jumpMultiplierPerBlock: BigNumber;
  kink: BigNumber;
  roof: BigNumber;
}
export type NewInterestParamsEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  NewInterestParamsEventObject
>;

export type NewInterestParamsEventFilter =
  TypedEventFilter<NewInterestParamsEvent>;

export interface JumpRateModelV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JumpRateModelV2Interface;

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
    baseRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      reserveFactorMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isInterestRateModel(overrides?: CallOverrides): Promise<[boolean]>;

    jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    kink(overrides?: CallOverrides): Promise<[BigNumber]>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    roof(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateJumpRateModel(
      baseRatePerYear: PromiseOrValue<BigNumberish>,
      multiplierPerYear: PromiseOrValue<BigNumberish>,
      jumpMultiplierPerYear: PromiseOrValue<BigNumberish>,
      kink_: PromiseOrValue<BigNumberish>,
      roof_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    utilizationRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

  getBorrowRate(
    cash: PromiseOrValue<BigNumberish>,
    borrows: PromiseOrValue<BigNumberish>,
    reserves: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupplyRate(
    cash: PromiseOrValue<BigNumberish>,
    borrows: PromiseOrValue<BigNumberish>,
    reserves: PromiseOrValue<BigNumberish>,
    reserveFactorMantissa: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

  jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  kink(overrides?: CallOverrides): Promise<BigNumber>;

  multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  roof(overrides?: CallOverrides): Promise<BigNumber>;

  updateJumpRateModel(
    baseRatePerYear: PromiseOrValue<BigNumberish>,
    multiplierPerYear: PromiseOrValue<BigNumberish>,
    jumpMultiplierPerYear: PromiseOrValue<BigNumberish>,
    kink_: PromiseOrValue<BigNumberish>,
    roof_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  utilizationRate(
    cash: PromiseOrValue<BigNumberish>,
    borrows: PromiseOrValue<BigNumberish>,
    reserves: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      reserveFactorMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

    jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    kink(overrides?: CallOverrides): Promise<BigNumber>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    roof(overrides?: CallOverrides): Promise<BigNumber>;

    updateJumpRateModel(
      baseRatePerYear: PromiseOrValue<BigNumberish>,
      multiplierPerYear: PromiseOrValue<BigNumberish>,
      jumpMultiplierPerYear: PromiseOrValue<BigNumberish>,
      kink_: PromiseOrValue<BigNumberish>,
      roof_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    utilizationRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "NewInterestParams(uint256,uint256,uint256,uint256,uint256)"(
      baseRatePerBlock?: null,
      multiplierPerBlock?: null,
      jumpMultiplierPerBlock?: null,
      kink?: null,
      roof?: null
    ): NewInterestParamsEventFilter;
    NewInterestParams(
      baseRatePerBlock?: null,
      multiplierPerBlock?: null,
      jumpMultiplierPerBlock?: null,
      kink?: null,
      roof?: null
    ): NewInterestParamsEventFilter;
  };

  estimateGas: {
    baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      reserveFactorMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<BigNumber>;

    jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    kink(overrides?: CallOverrides): Promise<BigNumber>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    roof(overrides?: CallOverrides): Promise<BigNumber>;

    updateJumpRateModel(
      baseRatePerYear: PromiseOrValue<BigNumberish>,
      multiplierPerYear: PromiseOrValue<BigNumberish>,
      jumpMultiplierPerYear: PromiseOrValue<BigNumberish>,
      kink_: PromiseOrValue<BigNumberish>,
      roof_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    utilizationRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      reserveFactorMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInterestRateModel(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jumpMultiplierPerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kink(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multiplierPerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roof(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateJumpRateModel(
      baseRatePerYear: PromiseOrValue<BigNumberish>,
      multiplierPerYear: PromiseOrValue<BigNumberish>,
      jumpMultiplierPerYear: PromiseOrValue<BigNumberish>,
      kink_: PromiseOrValue<BigNumberish>,
      roof_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    utilizationRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

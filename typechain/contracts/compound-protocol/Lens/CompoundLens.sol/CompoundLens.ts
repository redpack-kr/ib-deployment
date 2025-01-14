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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace CompoundLens {
  export type CTokenBalancesStruct = {
    cToken: PromiseOrValue<string>;
    balanceOf: PromiseOrValue<BigNumberish>;
    borrowBalanceCurrent: PromiseOrValue<BigNumberish>;
    balanceOfUnderlying: PromiseOrValue<BigNumberish>;
    tokenBalance: PromiseOrValue<BigNumberish>;
    tokenAllowance: PromiseOrValue<BigNumberish>;
    collateralEnabled: PromiseOrValue<boolean>;
    collateralBalance: PromiseOrValue<BigNumberish>;
    nativeTokenBalance: PromiseOrValue<BigNumberish>;
  };

  export type CTokenBalancesStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    cToken: string;
    balanceOf: BigNumber;
    borrowBalanceCurrent: BigNumber;
    balanceOfUnderlying: BigNumber;
    tokenBalance: BigNumber;
    tokenAllowance: BigNumber;
    collateralEnabled: boolean;
    collateralBalance: BigNumber;
    nativeTokenBalance: BigNumber;
  };

  export type CTokenMetadataStruct = {
    cToken: PromiseOrValue<string>;
    exchangeRateCurrent: PromiseOrValue<BigNumberish>;
    supplyRatePerBlock: PromiseOrValue<BigNumberish>;
    borrowRatePerBlock: PromiseOrValue<BigNumberish>;
    reserveFactorMantissa: PromiseOrValue<BigNumberish>;
    totalBorrows: PromiseOrValue<BigNumberish>;
    totalReserves: PromiseOrValue<BigNumberish>;
    totalSupply: PromiseOrValue<BigNumberish>;
    totalCash: PromiseOrValue<BigNumberish>;
    totalCollateralTokens: PromiseOrValue<BigNumberish>;
    isListed: PromiseOrValue<boolean>;
    collateralFactorMantissa: PromiseOrValue<BigNumberish>;
    underlyingAssetAddress: PromiseOrValue<string>;
    cTokenDecimals: PromiseOrValue<BigNumberish>;
    underlyingDecimals: PromiseOrValue<BigNumberish>;
    version: PromiseOrValue<BigNumberish>;
    collateralCap: PromiseOrValue<BigNumberish>;
    underlyingPrice: PromiseOrValue<BigNumberish>;
    supplyPaused: PromiseOrValue<boolean>;
    borrowPaused: PromiseOrValue<boolean>;
    supplyCap: PromiseOrValue<BigNumberish>;
    borrowCap: PromiseOrValue<BigNumberish>;
  };

  export type CTokenMetadataStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    cToken: string;
    exchangeRateCurrent: BigNumber;
    supplyRatePerBlock: BigNumber;
    borrowRatePerBlock: BigNumber;
    reserveFactorMantissa: BigNumber;
    totalBorrows: BigNumber;
    totalReserves: BigNumber;
    totalSupply: BigNumber;
    totalCash: BigNumber;
    totalCollateralTokens: BigNumber;
    isListed: boolean;
    collateralFactorMantissa: BigNumber;
    underlyingAssetAddress: string;
    cTokenDecimals: BigNumber;
    underlyingDecimals: BigNumber;
    version: number;
    collateralCap: BigNumber;
    underlyingPrice: BigNumber;
    supplyPaused: boolean;
    borrowPaused: boolean;
    supplyCap: BigNumber;
    borrowCap: BigNumber;
  };

  export type AccountLimitsStruct = {
    markets: PromiseOrValue<string>[];
    liquidity: PromiseOrValue<BigNumberish>;
    shortfall: PromiseOrValue<BigNumberish>;
  };

  export type AccountLimitsStructOutput = [string[], BigNumber, BigNumber] & {
    markets: string[];
    liquidity: BigNumber;
    shortfall: BigNumber;
  };
}

export interface CompoundLensInterface extends utils.Interface {
  functions: {
    "cTokenBalances(address,address)": FunctionFragment;
    "cTokenBalancesAll(address[],address)": FunctionFragment;
    "cTokenMetadata(address)": FunctionFragment;
    "cTokenMetadataAll(address[])": FunctionFragment;
    "getAccountLimits(address,address)": FunctionFragment;
    "getClaimableSushiRewards(address[],address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cTokenBalances"
      | "cTokenBalancesAll"
      | "cTokenMetadata"
      | "cTokenMetadataAll"
      | "getAccountLimits"
      | "getClaimableSushiRewards"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cTokenBalances",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenBalancesAll",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenMetadata",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenMetadataAll",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountLimits",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableSushiRewards",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "cTokenBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenBalancesAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenMetadataAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountLimits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableSushiRewards",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CompoundLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CompoundLensInterface;

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
    cTokenBalances(
      cToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cTokenBalancesAll(
      cTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cTokenMetadata(
      cToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cTokenMetadataAll(
      cTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAccountLimits(
      comptroller: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getClaimableSushiRewards(
      cTokens: PromiseOrValue<string>[],
      sushi: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cTokenBalances(
    cToken: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cTokenBalancesAll(
    cTokens: PromiseOrValue<string>[],
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cTokenMetadata(
    cToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cTokenMetadataAll(
    cTokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAccountLimits(
    comptroller: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getClaimableSushiRewards(
    cTokens: PromiseOrValue<string>[],
    sushi: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cTokenBalances(
      cToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<CompoundLens.CTokenBalancesStructOutput>;

    cTokenBalancesAll(
      cTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<CompoundLens.CTokenBalancesStructOutput[]>;

    cTokenMetadata(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<CompoundLens.CTokenMetadataStructOutput>;

    cTokenMetadataAll(
      cTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<CompoundLens.CTokenMetadataStructOutput[]>;

    getAccountLimits(
      comptroller: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<CompoundLens.AccountLimitsStructOutput>;

    getClaimableSushiRewards(
      cTokens: PromiseOrValue<string>[],
      sushi: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    cTokenBalances(
      cToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cTokenBalancesAll(
      cTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cTokenMetadata(
      cToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cTokenMetadataAll(
      cTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAccountLimits(
      comptroller: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getClaimableSushiRewards(
      cTokens: PromiseOrValue<string>[],
      sushi: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cTokenBalances(
      cToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cTokenBalancesAll(
      cTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cTokenMetadata(
      cToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cTokenMetadataAll(
      cTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAccountLimits(
      comptroller: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getClaimableSushiRewards(
      cTokens: PromiseOrValue<string>[],
      sushi: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

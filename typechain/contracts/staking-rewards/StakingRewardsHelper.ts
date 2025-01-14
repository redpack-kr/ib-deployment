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

export declare namespace StakingRewardsHelper {
  export type RewardTokenInfoStruct = {
    rewardTokenAddress: PromiseOrValue<string>;
    rewardTokenSymbol: PromiseOrValue<string>;
    rewardTokenDecimals: PromiseOrValue<BigNumberish>;
  };

  export type RewardTokenInfoStructOutput = [string, string, number] & {
    rewardTokenAddress: string;
    rewardTokenSymbol: string;
    rewardTokenDecimals: number;
  };

  export type RewardRateStruct = {
    rewardTokenAddress: PromiseOrValue<string>;
    rate: PromiseOrValue<BigNumberish>;
  };

  export type RewardRateStructOutput = [string, BigNumber] & {
    rewardTokenAddress: string;
    rate: BigNumber;
  };

  export type StakingInfoStruct = {
    stakingTokenAddress: PromiseOrValue<string>;
    totalSupply: PromiseOrValue<BigNumberish>;
    supplyRatePerBlock: PromiseOrValue<BigNumberish>;
    exchangeRate: PromiseOrValue<BigNumberish>;
    rewardRates: StakingRewardsHelper.RewardRateStruct[];
  };

  export type StakingInfoStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    StakingRewardsHelper.RewardRateStructOutput[]
  ] & {
    stakingTokenAddress: string;
    totalSupply: BigNumber;
    supplyRatePerBlock: BigNumber;
    exchangeRate: BigNumber;
    rewardRates: StakingRewardsHelper.RewardRateStructOutput[];
  };

  export type RewardClaimableStruct = {
    rewardToken: StakingRewardsHelper.RewardTokenInfoStruct;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type RewardClaimableStructOutput = [
    StakingRewardsHelper.RewardTokenInfoStructOutput,
    BigNumber
  ] & {
    rewardToken: StakingRewardsHelper.RewardTokenInfoStructOutput;
    amount: BigNumber;
  };

  export type UserStakedStruct = {
    stakingTokenAddress: PromiseOrValue<string>;
    balance: PromiseOrValue<BigNumberish>;
  };

  export type UserStakedStructOutput = [string, BigNumber] & {
    stakingTokenAddress: string;
    balance: BigNumber;
  };
}

export interface StakingRewardsHelperInterface extends utils.Interface {
  functions: {
    "claimAllRewards()": FunctionFragment;
    "claimRewards(address[])": FunctionFragment;
    "exit(address[])": FunctionFragment;
    "exitAll()": FunctionFragment;
    "factory()": FunctionFragment;
    "getRewardTokenInfo(address)": FunctionFragment;
    "getStakingInfo()": FunctionFragment;
    "getUserClaimableRewards(address,address[])": FunctionFragment;
    "getUserStaked(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "seize(address,uint256)": FunctionFragment;
    "stake(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unstake(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimAllRewards"
      | "claimRewards"
      | "exit"
      | "exitAll"
      | "factory"
      | "getRewardTokenInfo"
      | "getStakingInfo"
      | "getUserClaimableRewards"
      | "getUserStaked"
      | "owner"
      | "renounceOwnership"
      | "seize"
      | "stake"
      | "transferOwnership"
      | "unstake"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimAllRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "exit",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(functionFragment: "exitAll", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRewardTokenInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserClaimableRewards",
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserStaked",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seize",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimAllRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exitAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserClaimableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenSeized(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenSeized"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokenSeizedEventObject {
  token: string;
  amount: BigNumber;
}
export type TokenSeizedEvent = TypedEvent<
  [string, BigNumber],
  TokenSeizedEventObject
>;

export type TokenSeizedEventFilter = TypedEventFilter<TokenSeizedEvent>;

export interface StakingRewardsHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingRewardsHelperInterface;

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
    claimAllRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimRewards(
      stakingRewards: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exit(
      stakingRewards: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exitAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    getRewardTokenInfo(
      rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[StakingRewardsHelper.RewardTokenInfoStructOutput]>;

    getStakingInfo(
      overrides?: CallOverrides
    ): Promise<[StakingRewardsHelper.StakingInfoStructOutput[]]>;

    getUserClaimableRewards(
      account: PromiseOrValue<string>,
      rewardTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[StakingRewardsHelper.RewardClaimableStructOutput[]]>;

    getUserStaked(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[StakingRewardsHelper.UserStakedStructOutput[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    seize(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stake(
      underlying: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unstake(
      stakingRewards: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claimAllRewards(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimRewards(
    stakingRewards: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exit(
    stakingRewards: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exitAll(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  getRewardTokenInfo(
    rewardToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<StakingRewardsHelper.RewardTokenInfoStructOutput>;

  getStakingInfo(
    overrides?: CallOverrides
  ): Promise<StakingRewardsHelper.StakingInfoStructOutput[]>;

  getUserClaimableRewards(
    account: PromiseOrValue<string>,
    rewardTokens: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<StakingRewardsHelper.RewardClaimableStructOutput[]>;

  getUserStaked(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<StakingRewardsHelper.UserStakedStructOutput[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  seize(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stake(
    underlying: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unstake(
    stakingRewards: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimAllRewards(overrides?: CallOverrides): Promise<void>;

    claimRewards(
      stakingRewards: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    exit(
      stakingRewards: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    exitAll(overrides?: CallOverrides): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    getRewardTokenInfo(
      rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<StakingRewardsHelper.RewardTokenInfoStructOutput>;

    getStakingInfo(
      overrides?: CallOverrides
    ): Promise<StakingRewardsHelper.StakingInfoStructOutput[]>;

    getUserClaimableRewards(
      account: PromiseOrValue<string>,
      rewardTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<StakingRewardsHelper.RewardClaimableStructOutput[]>;

    getUserStaked(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<StakingRewardsHelper.UserStakedStructOutput[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    seize(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      underlying: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(
      stakingRewards: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TokenSeized(address,uint256)"(
      token?: null,
      amount?: null
    ): TokenSeizedEventFilter;
    TokenSeized(token?: null, amount?: null): TokenSeizedEventFilter;
  };

  estimateGas: {
    claimAllRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimRewards(
      stakingRewards: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exit(
      stakingRewards: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exitAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardTokenInfo(
      rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getUserClaimableRewards(
      account: PromiseOrValue<string>,
      rewardTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserStaked(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    seize(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stake(
      underlying: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unstake(
      stakingRewards: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimAllRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimRewards(
      stakingRewards: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exit(
      stakingRewards: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exitAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRewardTokenInfo(
      rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserClaimableRewards(
      account: PromiseOrValue<string>,
      rewardTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserStaked(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    seize(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      underlying: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      stakingRewards: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

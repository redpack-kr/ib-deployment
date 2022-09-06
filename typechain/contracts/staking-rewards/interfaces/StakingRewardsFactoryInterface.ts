/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../../common";

export interface StakingRewardsFactoryInterfaceInterface
  extends utils.Interface {
  functions: {
    "getAllStakingRewards()": FunctionFragment;
    "getStakingRewards(address)": FunctionFragment;
    "getStakingRewardsCount()": FunctionFragment;
    "getStakingToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAllStakingRewards"
      | "getStakingRewards"
      | "getStakingRewardsCount"
      | "getStakingToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAllStakingRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingRewards",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingRewardsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingToken",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllStakingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingRewardsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StakingRewardsFactoryInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingRewardsFactoryInterfaceInterface;

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
    getAllStakingRewards(overrides?: CallOverrides): Promise<[string[]]>;

    getStakingRewards(
      stakingToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getStakingRewardsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStakingToken(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getAllStakingRewards(overrides?: CallOverrides): Promise<string[]>;

  getStakingRewards(
    stakingToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getStakingRewardsCount(overrides?: CallOverrides): Promise<BigNumber>;

  getStakingToken(
    underlying: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getAllStakingRewards(overrides?: CallOverrides): Promise<string[]>;

    getStakingRewards(
      stakingToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getStakingRewardsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getStakingToken(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAllStakingRewards(overrides?: CallOverrides): Promise<BigNumber>;

    getStakingRewards(
      stakingToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingRewardsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getStakingToken(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllStakingRewards(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingRewards(
      stakingToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingRewardsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingToken(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

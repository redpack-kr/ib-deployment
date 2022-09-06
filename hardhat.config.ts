// import 'dotenv/config';
// import {HardhatUserConfig} from 'hardhat/types';
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

//import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-waffle";
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import "@typechain/hardhat"; //enable "hardhat typechain"
import 'hardhat-deploy';
import 'hardhat-contract-sizer';
import './tasks';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
      hardfork: "berlin", // use berlin in test to avoid issues with gas price 0
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        accountsBalance: "100000000000000000000000000000000000",
      },
    },
    ethereum: {
      url: process.env.ETH_MAINNET_RPC,
      accounts: [process.env.ETH_MAINNET_PRIVATE_KEY],
    },
    eth_mainnetfork: {
      url: process.env.FORK_RPC,
      accounts: [process.env.FUNDED_PRIVATE_KEY, process.env.ETH_MAINNET_PRIVATE_KEY],
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.5.17',
        settings: {
          optimizer: {
            enabled: true
          }
        }
      },
      {
        version: '0.8.11',
        settings: {
          optimizer: {
            enabled: true
          }
        }
      }
    ]
  },
  namedAccounts: {
    deployer: 0,
    poster: '0xd830A7413CB25FEe57f8115CD64E565B0Be466c3',
    admin: {
      default: '0x0501Be0dA35990FbF5c434c29186A7966846c0D5',
      mainnet: '0xA5fC0BbfcD05827ed582869b7254b6f141BA84Eb',
      fantom: '0xA5fC0BbfcD05827ed582869b7254b6f141BA84Eb',
      avalanche: '0xf3472A93B94A17dC20F9Dc9D0D48De42FfbD14f4',
      op: '0xfB9423283EB7F65210B9aB545ecC212B5AE52b3A'
    },
    guardian: {
      default: '0x0501Be0dA35990FbF5c434c29186A7966846c0D5',
      mainnet: '0x9d960dAe0639C95a0C822C9d7769d19d30A430Aa',
      fantom: '0x9d960dAe0639C95a0C822C9d7769d19d30A430Aa',
      avalanche: '0x93C220cf1Db6ea5Ab593180ccffA7C0C63A9767E',
      op: '0xa0FF78Cc79e9061E013A186D1DC34f8FdE9a0576'
    },
    dispatcher: '0xD0f1f9cb5e6C84c3E3a067b421034d57cD73a967',
    timelock: {
      mainnet: '0x5b12f04e22384B01f42Ed14Da23eAcd21f14AC17',
    },
    nativeUsdAggregator: {
      avalanche: '0x0A77230d17318075983913bC2145DB16C7366156',
      op: '0x13e3Ee699D1909E989722E753853AE30b17e08c5',
      kovOp: '0x7f8847242a530E809E17bF2DA5D2f9d2c4A43261'
    },
    wrappedNative: {
      avalanche: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      op: '0x4200000000000000000000000000000000000006',
      kovOp: '0x4200000000000000000000000000000000000006',
    },
    usdc: {
      avalanche: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
      op: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      kovOp: '0x3e22e37Cb472c872B5dE121134cFD1B57Ef06560',
    }
  },
  paths: {
    sources: "./contracts/",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  typechain: {
    outDir: "./typechain",
    target: process.env.TYPECHAIN_TARGET || "ethers-v5",
  },
  mocha: {
    timeout: 100000,
  },
};

//export default config;

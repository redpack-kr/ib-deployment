import {deployments, ethers, getNamedAccounts} from 'hardhat';
const {parseEther} = ethers.utils;
const {execute, get} = deployments;

const markets = [
  '0x17533a1bDe957979E3977EbbFBC31E6deeb25C7d',
  '0x1d073cf59Ae0C169cbc58B6fdD518822ae89173a',
  '0x874C01c2d1767EFA01Fa54b2Ac16be96fAd5a742',
  '0x049E04bEE77cFfB055f733A138a2F204D3750283',
  '0xcdb9b4db65C913aB000b40204248C8A53185D14D',
  // '0x4645e0952678E9566FB529D9313f5730E4e1C412',
];

const cfs = [
  parseEther('0.85'),
  parseEther('0.85'),
  parseEther('0.8'),
  parseEther('0.8'),
  parseEther('0.75'),
  // parseEther('0.5'),
];

const ccaps = [
  '20000000000000',
  '20000000000000000',
  '10000000000000000',
  '10000000000000000',
  '250000000000',
  // '2000000000000000',
];

const rfs = [
  parseEther('0.10'),
  parseEther('0.10'),
  parseEther('0.10'),
  parseEther('0.10'),
  parseEther('0.10'),
  // parseEther('0.20'),
];

const sources = [
  '0x13e3Ee699D1909E989722E753853AE30b17e08c5',
  '0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3',
  '0xECef79E109e997bCA29c1c0897ec9d7b03647F5E',
  '0x8dBa75e83DA73cc766A7e5a0ee71F656BAb470d6',
  '0xD702DD976Fb76Fffc2D3963D037dfDae5b04E593',
];


async function main() {
  const {deployer} = await getNamedAccounts();

  const wrappedNativeMarket = '0x17533a1bDe957979E3977EbbFBC31E6deeb25C7d';

  await execute('PriceOracleProxyUSD', { from: deployer, log: true }, '_setAggregators', markets, sources, Array(markets.length).fill(0));

  for (let i=0; i < markets.length; i++) {
    await execute('Comptroller', { from: deployer, log: true }, '_supportMarket', markets[i], markets[i] == wrappedNativeMarket ? 2 : 1);
    await execute('CTokenAdmin', { from: deployer, log: true }, '_setReserveFactor', markets[i], rfs[i]);
    if (markets[i] != wrappedNativeMarket) {
      await execute('CTokenAdmin', { from: deployer, log: true }, '_setCollateralCap', markets[i], ccaps[i]);
    }
    await execute('Comptroller', { from: deployer, log: true }, '_setCollateralFactor', markets[i], cfs[i]);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

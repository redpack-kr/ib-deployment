import {deployments, ethers, getNamedAccounts} from 'hardhat';
const {parseUnits} = ethers.utils;
const {deploy, get, getArtifact, save, run} = deployments;

enum IRM {
  Major = 'MajorIRM',
  Stable = 'StableIRM',
  Gov = 'GovIRM'
}

const crSymbol = 'iOP';
const crName = 'Iron Bank Optimism';
const underlyingAddress = '0x4200000000000000000000000000000000000042';
const interestRateModel = IRM.Major;
const exchangeRate = '0.01';


async function main() {
  const {deployer} = await getNamedAccounts();
  const comptrollerAddress = (await get('Comptroller')).address;
  const irmAddress = (await get(interestRateModel)).address;
  const cTokenAdminAddress = (await get('CTokenAdmin')).address;
  const cTokenImplementationAddress = (await get('CCollateralCapErc20Delegate')).address;

  const erc20ABI = (await getArtifact('EIP20Interface')).abi;
  const underlying = await ethers.getContractAt(erc20ABI, underlyingAddress);
  const underlyingDecimal = await underlying.decimals();
  const initialExchangeRate = parseUnits(exchangeRate, 18 + underlyingDecimal - 8);

  const result = await deploy(crSymbol, {
    from: deployer,
    contract: 'CErc20Delegator',
    args: [
      underlyingAddress,
      comptrollerAddress,
      irmAddress,
      initialExchangeRate,
      crName,
      crSymbol,
      8,
      cTokenAdminAddress,
      cTokenImplementationAddress,
      "0x"
    ],
  });

  console.log(crSymbol, 'deployed at:', result.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {get, execute} = deployments;

  const { admin, deployer } = await getNamedAccounts();

  await execute('PriceOracleProxyUSD', { from: deployer, log: true }, '_setAdmin', admin);
  await execute('CTokenAdmin', { from: deployer, log: true }, 'setAdmin', admin);

};
export default func;
func.tags = ['setAdmin'];

import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute, get} = deployments;

  const {admin, deployer, dispatcher, wrappedNative, usdc} = await getNamedAccounts();

  const comptrollerAddress = (await get('Comptroller')).address;

  await deploy('ReserveManager', {
    from: deployer,
    args: [deployer, admin, comptrollerAddress, wrappedNative, usdc],
    log: true
  });

  await execute('ReserveManager', { from: deployer, log: true }, 'setDispatcher', dispatcher);

};
export default func;
func.tags = ['ReserveManager'];

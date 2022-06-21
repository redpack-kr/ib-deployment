import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, ethers, getNamedAccounts} = hre;
  const {deploy, execute, get} = deployments;

  const {admin, deployer} = await getNamedAccounts();

  const lm = await deploy('LiquidityMining', {
    from: deployer,
    args: [],
    log: true
  });

  const comptroller = (await get('Comptroller')).address;

  const liquidityMiningFactory = await ethers.getContractFactory("LiquidityMining");
  const fragment = liquidityMiningFactory.interface.getFunction('initialize');
  const initData = liquidityMiningFactory.interface.encodeFunctionData(fragment, [admin, comptroller])

  await deploy('LiquidityMiningProxy', {
    from: deployer,
    args: [lm.address, initData],
    log: true
  });
};
export default func;
func.tags = ['LiquidityMining'];

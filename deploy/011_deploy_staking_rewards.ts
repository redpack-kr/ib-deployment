import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute, get} = deployments;

  const {admin, deployer} = await getNamedAccounts();

  const factory = await deploy('StakingRewardsFactory', {
    from: deployer,
    log: true
  });

  await execute('StakingRewardsFactory', { from: deployer, log: true }, 'transferOwnership', admin);

  await deploy('StakingRewardsHelper', {
    from: deployer,
    args: [factory.address],
    log: true
  })

  await execute('StakingRewardsHelper', { from: deployer, log: true }, 'transferOwnership', admin);
};
export default func;
func.tags = ['StakingRewards'];

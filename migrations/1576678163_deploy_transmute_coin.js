const Transmute = artifacts.require('Transmute')
const _totalSupply = 2000000000
const _tokenSalePercentage = 70
const _rewardPercentage = 5
const _teamAdvPercentage = 15
const _strategicPnPercentage = 5
const _bountyAirdropPercentage = 5

module.exports = function(_deployer) {
  _deployer.deploy(Transmute, _totalSupply, _tokenSalePercentage, _rewardPercentage, _teamAdvPercentage,
     _strategicPnPercentage, _bountyAirdropPercentage)
};

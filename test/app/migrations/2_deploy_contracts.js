var NC = artifacts.require("./NEW_CONTRACT.sol");

module.exports = function(deployer) {
    deployer.deploy(NC, process.env.DUCOR_ETH_MASTER_ADDRESS, process.env.DUCOR_ETH_ORACLE_ACCOUNT);
};
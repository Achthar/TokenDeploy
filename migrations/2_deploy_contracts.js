const TxDoge = artifacts.require('TxDoge')

module.exports = function(deployer) {
    deployer.deploy(TxDoge)
}
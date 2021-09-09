const Migrations = artifacts.require("Migrations");
const Amtrek = artifacts.require("Amtrek");

module.exports = async function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Amtrek);

  const amtrek = await Amtrek.deployed();

};



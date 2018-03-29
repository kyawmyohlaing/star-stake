var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
var Authentication = artifacts.require("./Authentication.sol");
var SimpleStore = artifacts.require("./SimpleStore.sol");
var KeyValueStore = artifacts.require('./KeyValueStore.sol');
var Courses = artifacts.require("./Courses.sol");
module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, Authentication);
  deployer.deploy(Authentication);

  deployer.deploy(SimpleStore);
  deployer.deploy(KeyValueStore);

  Promise.all([1,2,3,4,5,6,7].map(i => {
    return deployer.deploy(Courses)
      .then(() => {
        return Courses.deployed()
      })
      .then((inst) => {
        return inst.ownerAddress.call()
      })
      .then((res) => {
        console.log('ownerAddress:',res);
        return 1;
      })
  }));
};



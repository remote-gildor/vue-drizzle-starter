const path = require('path')
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "vapp/src/contracts"),

  compilers: {
    solc: {
      version: "0.6.8"    // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

};

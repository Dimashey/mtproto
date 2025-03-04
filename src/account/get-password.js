const api = require("../api");

const getPassword = async () => {
  return api.call("account.getPassword");
};

module.exports = getPassword;

const checkPassword = require("./check-password");
const sendCode = require("./send-code");
const signIn = require("./sign-in");

module.exports = {
  sendCode,
  signIn,
  checkPassword,
};

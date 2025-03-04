const api = require("../api");

const signIn = async ({ code, phone, phone_code_hash }) => {
  return api.call("auth.signIn", {
    phone_code: code,
    phone_number: phone,
    phone_code_hash,
  });
};

module.exports = signIn;

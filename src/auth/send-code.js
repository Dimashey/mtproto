const api = require("../api");

const sendCode = (phone) => {
  return api.call("auth.sendCode", {
    phone_number: phone,
    settings: {
      _: "codeSettings",
    },
  });
};

module.exports = sendCode;

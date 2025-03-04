const api = require("../api");

const getDialogs = async () => {
  return api.call("messages.getDialogs", {
    offset_date: 0,
    offset_id: 0,
    offset_peer: { _: "inputPeerEmpty" },
    limit: 100,
    hash: 0,
  });
};

module.exports = getDialogs;

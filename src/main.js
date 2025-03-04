const IO = require("./io");
const auth = require("./auth");
const { PASSWORD_NEEDED } = require("./constants/error");
const account = require("./account");
const api = require("./api");
const messages = require("./messages");
const fs = require("fs");

(async () => {
  const io = new IO();

  const phone = await io.prompt("please enter your phone number: ");

  try {
    const { phone_code_hash } = await auth.sendCode(phone);

    const code = await io.prompt("please enter the code: ");

    await auth.signIn({ phone, code, phone_code_hash });
  } catch (error) {
    if (error.error_message === PASSWORD_NEEDED.MESSAGE) {
      const password = await io.prompt("please enter password: ");

      const { srp_id, current_algo, srp_B } = await account.getPassword();
      const { g, p, salt1, salt2 } = current_algo;

      const { A, M1 } = await api.mtproto.crypto.getSRPParams({
        g,
        p,
        salt1,
        salt2,
        gB: srp_B,
        password,
      });

      await auth.checkPassword({ srp_id, A, M1 });

      const dialogs = await messages.getDialogs();

      fs.writeFileSync("./dialogs.json", JSON.stringify(dialogs, null, "  "));
    }
  } finally {
    io.finish();
  }
})();

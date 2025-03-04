const readline = require("readline");

class IO {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  prompt(question) {
    return new Promise((r) => {
      this.rl.question(question, (answer) => r(answer));
    });
  }

  finish() {
    this.rl.close();
    setTimeout(() => process.exit(0), 500).unref();
  }
}

module.exports = IO;

const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password) => {
  // opening the file and write the password in the opened file
  fs.open(
    path.join(__dirname, "../", "paswords.txt"),
    "a",
    (event, id) => {
      console.log(chalk.bgRed('ID : ' + id));
      let eventId = id;
      // writing the data into the file
      fs.write(id, `${'Password : ' +password + os.EOL }`, null, "utf-8", 
      () => {
        // closing teh file after write finished
        fs.close(id, 
      () => {
          console.log(chalk.green("Password saved to passwords.txt"));
          console.log(`${'Password : ' +password + os.EOL }`);
        });
      });
    });
};

module.exports = savePassword;

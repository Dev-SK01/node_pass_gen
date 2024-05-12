#!/usr/bin/env node

const program = require("commander");
// for logging the data
const log = console.log;

const createPassword = require("./utils/createPassword");
//Add last
const savePassword = require("./utils/savePassword");
// for colorful terminal
const chalk = require("chalk");
// for copying the genereted password into clip board
const clipboardy = require("clipboardy");

// configuring the terminal commad using commander lib
program.version("1.0.0").description("A Simple NodeJS password Generator");


program
  .option("-l, --length <number>", "length of password", "Default <8>")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

//save to file last part
if (save) {
  savePassword(generatedPassword);
}

//to copy to clicpboard
clipboardy.writeSync(generatedPassword);

log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard"));

//last part add some fields in package.json
//add the top first line
// then type npm link from cli to unlink npm unlink
/// now you can use the package name and run it

const alpha = "abdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

//not necessary defaults
const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  // getting the args valur from the terminal & defining the character
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";
  // generate passsword by given length and charactors
  return generatePassword(length, chars);
};

//Second part
const generatePassword = (length, chars) => {
  // getting length and charactor generating the password with given length & chractors
  let password = "";
  // using loop to generate random number and passing the number as index of the char
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = createPassword;

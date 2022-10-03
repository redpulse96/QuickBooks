const bcrypt = require('bcrypt');
const DEFAULT_SALT = 10;

function generateSalt() {
  return bcrypt.genSalt(DEFAULT_SALT);
}

function generateHash(password, salt) {
  return bcrypt.hash(password, salt);
}

function validatePassword(inputPassword, encryptedPassword) {
  return bcrypt.compare(inputPassword, encryptedPassword);
}

module.exports = { generateHash, generateSalt, validatePassword };

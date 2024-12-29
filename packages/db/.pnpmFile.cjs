const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: './.envrc' });

module.exports = {
  hooks: {
    readPackage(pkg) {
      return pkg;
    },
  },
};

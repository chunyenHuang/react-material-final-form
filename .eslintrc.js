module.exports = {
  "extends": ["eslint:recommended"],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "max-len": ["error", { "code": 160 }],
    "no-console": ["error", { allow: ["log", "warn", "error"] }],
    "object-curly-spacing": ["warn", "always"]
  },
  "env": {
    "node": true,
    "es6": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  }
};

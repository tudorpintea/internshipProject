module.exports = {

  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "env": {
    "jest": true
  },
  "rules": {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "no-undef": "off",
    "react/jsx-curly-brace-presence": {
      "props": "always",
      "children": "always"
    }
  },
  "globals": {
    "fetch": false
  },
  "plugins": ["prettier"]

}

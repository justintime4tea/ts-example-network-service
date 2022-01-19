// This is the idiomatic way to configure eslint so we disable the no-undef; it is very likely that module is defined
// eslint-disable-next-line no-undef
module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
  },
};
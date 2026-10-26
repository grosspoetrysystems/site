export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-empty": [2, "always"],
    "header-max-length": [2, "always", 100],
  },
};

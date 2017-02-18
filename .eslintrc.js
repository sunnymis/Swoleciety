module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
      "window": true,
      "document": true,
      "describe": true,
      "beforeEach": true,
      "it": true,
      "expect": true,
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "arrow-body-style": ["error", "always"],
      "padded-blocks": ["never"],
    }
};
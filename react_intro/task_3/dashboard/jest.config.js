module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "jest-css-modules"
  },
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  }
};


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

global.TextEncoder = function () {
  return {
    encode: function (str) {
      return Buffer.from(str, 'utf-8');
    },
  };
};


module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    "\\.(jpg)$": "<rootDir>/__mocks__/fileMock.js"
  },
};


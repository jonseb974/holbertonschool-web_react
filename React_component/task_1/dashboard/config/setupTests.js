import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({ adapter: new Adapter() });

//const { defaults } = require('jest-config');

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    "\\.(jpg)$": "<rootDir>/__mocks__/fileMock.js"
  },
};


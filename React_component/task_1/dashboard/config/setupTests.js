import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextEncoder } from 'text-encoding';


Enzyme.configure({ adapter: new Adapter() });

// Polyfill for TextEncoder
global.TextEncoder = TextEncoder;

//const { defaults } = require('jest-config');

module.exports = {
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    "\\.(jpg)$": "<rootDir>/__mocks__/fileMock.js"
  },
};


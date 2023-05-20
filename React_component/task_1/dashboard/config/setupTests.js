import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextEncoder } from 'text-encoding';


Enzyme.configure({ adapter: new Adapter() });
global.TextEncoder = TextEncoder;

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    "\\.(jpg)$": "<rootDir>/__mocks__/fileMock.js"
  },
};


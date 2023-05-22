import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

const shallow  = Enzyme.shallow;
const mount = Enzyme.mount;

module.exports = {
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    "\\.(jpg)$": "<rootDir>/__mocks__/fileMock.js"
  },
};

export { shallow, mount };
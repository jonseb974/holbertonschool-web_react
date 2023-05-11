// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom



// setupTests.js
//import Enzyme from 'enzyme';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import 'identity-obj-proxy';
//import '@testing-library/jest-dom';
//import '@testing-library/jest-dom/extend-expect';


Enzyme.configure({ adapter: new Adapter() });

//const { defaults } = require('jest-config');

module.exports = {
  moduleNameMapper: {
    '/\.(css)$/': '<rootDir>/__mocks__/styleMock.js',
  },
//  ...defaults,
//  transform: {
//    ...defaults.transform,
//    '^.+\\.css$': 'jest-transform-css',
//  },
//  moduleNameMapper: {
//    '\\.(css)$':'identity-obj-proxy',
//  },
//  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};


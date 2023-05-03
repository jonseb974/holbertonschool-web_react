import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import util from 'util';

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});

Enzyme.configure({ adapter: new Adapter() });

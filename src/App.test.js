import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

test('renders without an error', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toBeTruthy();
});

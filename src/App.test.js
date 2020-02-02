import React from 'react';
import { shallow } from 'enzyme';

import { findByAttribute } from 'utils';

import { App } from './App';

test('renders without an error', () => {
  const wrapper = shallow(<App />);
  const component = findByAttribute(wrapper, 'component-app');

  expect(component).toBeTruthy();
});

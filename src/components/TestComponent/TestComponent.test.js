import React from 'react';
import { shallow } from 'enzyme';

import { TestComponent } from '@components';

test('renders without an error', () => {
  const wrapper = shallow(<TestComponent />);

  expect(wrapper).toBeTruthy();
});
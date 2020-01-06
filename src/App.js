import React, { Component } from 'react';

import { TestComponent } from '@components';

import './App.scss';

export class App extends Component {
  render() {
    return (
      <div data-test-id="component-app">
        <TestComponent />
      </div>
    );
  }
}

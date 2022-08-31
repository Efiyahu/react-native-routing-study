import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../src/App';

describe('App', () => {
  test('Should render correctly', () => {
    const wrapper = render(<App />);
    wrapper.queryByTestId('app');
  });
});

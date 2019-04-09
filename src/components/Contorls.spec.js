import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('<Controls />', () => {
  it('should render buttons', () => {
    const { getByText } = render(<Controls actions={{}} />);
    getByText(/ball/i);
    getByText(/strike/i);
    getByText(/foul/i);
    getByText(/hit/i);
  });
});

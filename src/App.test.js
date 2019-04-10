import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('scoreboard', () => {
  it('displays strikes', () => {
    const { getByText } = render(<App />);
    const strikes = getByText(/strikes/i);
  });

  it('displays balls', () => {
    const { getByText } = render(<App />);
    const balls = getByText(/balls/i);
  });

  it('displays hits', () => {
    const { getByText } = render(<App />);
    const hits = getByText(/hits/i);
  });
});

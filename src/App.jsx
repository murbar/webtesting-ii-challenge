import React from 'react';
import styled from 'styled-components';
import Scoreboard from './components/Scoreboard';
import Controls from './components/Controls';

const Styles = styled.div`
  max-width: 40rem;
  margin: 1rem auto;
  padding: 1rem;
  h1 {
    text-align: center;
  }
`;

const App = () => {
  return (
    <Styles>
      <h1>Score Board Control</h1>
      <Scoreboard />
      <Controls />
    </Styles>
  );
};

export default App;

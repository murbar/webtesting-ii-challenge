import React from 'react';
import styled from 'styled-components';
import Scoreboard from './components/Scoreboard';
import Controls from './components/Controls';
import useScoreboard from './useScoreboard';

const Styles = styled.div`
  max-width: 40rem;
  margin: 1rem auto;
  padding: 1rem;
  h1 {
    text-align: center;
  }
`;

const App = () => {
  const scoreBoard = useScoreboard();

  return (
    <Styles>
      <h1>Score Board Control</h1>
      <Scoreboard data={scoreBoard.data} />
      <Controls actions={scoreBoard} />
    </Styles>
  );
};

export default App;

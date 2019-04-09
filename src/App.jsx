import React from 'react';
import styled from 'styled-components';

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
    </Styles>
  );
};

export default App;

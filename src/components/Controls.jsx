import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  margin-top: 2rem;
  display: flex;
  button {
    flex: 1;
    margin-right: 1.5rem;
    background: black;
    color: white;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 3px 3px 0 0 #ccc;
  }
  button:last-child {
    margin-right: 0;
  }
`;

const Controls = ({ actions }) => {
  return (
    <Styles>
      <button onClick={actions.recordStrike}>Strike</button>
      <button onClick={actions.recordBall}>Ball</button>
      <button onClick={actions.recordFoul}>Foul</button>
      <button onClick={actions.recordHit}>Hit</button>
    </Styles>
  );
};

export default Controls;

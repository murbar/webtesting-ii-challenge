import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  border: 3px solid black;
  box-shadow: 3px 3px 0 0 #ccc;
  padding: 2rem 1rem;
  font-family: 'Shrikhand';
  display: flex;
  justify-content: space-around;
  span {
    background: black;
    color: white;
    padding: 0 1rem;
    margin-left: 0.5rem;
    font-size: 2rem;
    font-variant-numeric: tabular-nums;
  }
`;

const Scoreboard = ({ data }) => {
  return (
    <Styles>
      <div>
        Strikes <span id="strikes">{data.strikes}</span>
      </div>
      <div>
        Balls <span id="balls">{data.balls}</span>
      </div>
      <div>
        Hits <span id="hits">{data.hits}</span>
      </div>
    </Styles>
  );
};

export default Scoreboard;

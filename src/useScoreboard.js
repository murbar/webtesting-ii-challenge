import { useState } from 'react';

const useScoreboard = () => {
  const [data, setData] = useState({
    strikes: 0,
    balls: 0,
    hits: 0
  });

  const recordBall = () => {
    setData(prevData => {
      if (prevData.balls === 3) return { ...prevData, balls: 0 };

      return { ...prevData, balls: prevData.balls + 1 };
    });
  };

  const recordStrike = () => {
    setData(prevData => {
      if (prevData.strikes === 2) return { ...prevData, strikes: 0 };

      return { ...prevData, strikes: prevData.strikes + 1 };
    });
  };

  const recordFoul = () => {
    setData(prevData => {
      if (prevData.strikes < 2) return { ...prevData, strikes: prevData.strikes + 1 };

      return { ...prevData };
    });
  };

  const recordHit = () => {
    setData(prevData => {
      return { ...prevData, hits: prevData.hits + 1 };
    });
  };

  return { data, recordStrike, recordBall, recordFoul, recordHit };
};

export default useScoreboard;

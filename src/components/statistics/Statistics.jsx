import React from 'react';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className='statistics'>
      <p className='statisticsP'>Good: {good}</p>
      <p className='statisticsP'>Neutral: {neutral}</p>
      <p className='statisticsP'>Bad: {bad}</p>
      <p className='statisticsP'>Total: {total}</p>
      <p className='statisticsP'>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

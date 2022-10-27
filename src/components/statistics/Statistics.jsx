import React from 'react';
import { StatisticsText, StatisticsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticsText>Statistics</StatisticsText>
      <ul>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {positivePercentage.toFixed()}%
        </StatisticsItem>
      </ul>
    </>
  );
};

export default Statistics;

import React, { Component } from 'react';
import {
  FirstText,
  Container,
  BtnContainer,
  Button,
  StatisticsText,
  StatisticsItem,
} from './Feedback.styled';

class Feedback extends Component {
  render() {
    return (
      <Container>
        <FirstText>Please leave feedback</FirstText>
        <BtnContainer>
          <Button type="button">Good</Button>
          <Button type="button">Neutral</Button>
          <Button type="button">Bad</Button>
        </BtnContainer>
        <StatisticsText>Statistics</StatisticsText>
        <ul>
          <StatisticsItem>Good:</StatisticsItem>
          <StatisticsItem>Neutral:</StatisticsItem>
          <StatisticsItem>Bad:</StatisticsItem>
        </ul>
      </Container>
    );
  }
}

export default Feedback;

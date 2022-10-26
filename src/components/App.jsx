import React, { Component } from 'react';
import {
  FirstText,
  Container,
  BtnContainer,
  Button,
  StatisticsText,
  StatisticsItem,
} from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const totalVotes = this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedbackPercentage =
      (this.state.good / totalVotes) * 100 || 0;

    return (
      <Container>
        <FirstText>Please leave feedback</FirstText>
        <BtnContainer>
          <Button type="button" onClick={this.handleGoodIncrement}>
            Good
          </Button>
          <Button type="button" onClick={this.handleNeutralIncrement}>
            Neutral
          </Button>
          <Button type="button" onClick={this.handleBadIncrement}>
            Bad
          </Button>
        </BtnContainer>
        <StatisticsText>Statistics</StatisticsText>
        <ul>
          <StatisticsItem>Good: {this.state.good}</StatisticsItem>
          <StatisticsItem>Neutral: {this.state.neutral}</StatisticsItem>
          <StatisticsItem>Bad: {this.state.bad}</StatisticsItem>
          <StatisticsItem>Total: {totalVotes}</StatisticsItem>
          <StatisticsItem>
            Positive feedback: {positiveFeedbackPercentage.toFixed()}%
          </StatisticsItem>
        </ul>
      </Container>
    );
  }
}

export default App;

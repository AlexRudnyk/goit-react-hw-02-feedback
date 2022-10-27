import styled from 'styled-components';

export const StatisticsText = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const StatisticsItem = styled.li`
  font-size: 24px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

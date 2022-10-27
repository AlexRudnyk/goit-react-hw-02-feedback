import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const FirstText = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

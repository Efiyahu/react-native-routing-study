import React from 'react';
import styled from 'styled-components/native';

const MealDetails = ({duration, complexity, affordability}) => (
  <Description>
    <DetailItem>{duration}m</DetailItem>
    <DetailItem>{complexity.toUpperCase()}</DetailItem>
    <DetailItem>{affordability.toUpperCase()}</DetailItem>
  </Description>
);

export default MealDetails;

const Description = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const DetailItem = styled.Text`
  margin: 0 4px;
  font-size: 12px;
  color: red;
`;

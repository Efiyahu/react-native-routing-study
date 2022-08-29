import React from 'react';
import styled from 'styled-components/native';

const List = ({selectedData}) => {
  return selectedData.map(item => (
    <StyledView key={item}>
      <Ingerdients>{item}</Ingerdients>
    </StyledView>
  ));
};

export default List;

const Ingerdients = styled.Text`
  color: ${({theme}) => theme.textColor.list};
  text-align: center;
`;

const StyledView = styled.View`
  border-radius: 6px;
  padding: 4px 8px;
  margin: 8px 12px;
  background-color: ${({theme}) => theme.listColor};
`;

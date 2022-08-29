import {Platform, PlatformOSType} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <OuterView system={Platform.OS}>
      <StyledButton
        onPress={onPress}
        style={({pressed}) => pressed && {opacity: 0.8}}>
        <InnerView color={color}>
          <Title>{title}</Title>
        </InnerView>
      </StyledButton>
    </OuterView>
  );
};

export default CategoryGridTile;

export const OuterView = styled.View`
  flex: 1;
  margin: 16px;
  border-radius: 8px;
  height: 150px;
  background-color: ${({theme}) => theme.light};
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  overflow: ${({system}) => (system === 'android' ? 'hidden' : 'visible')};
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const StyledButton = styled.Pressable`
  flex: 1;
`;

const InnerView = styled.View`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
`;

import {Pressable, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import MealDetails from './MealDetails';

const MealItem = ({title, id, image, duration, complexity, affordability}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const handlePress = () => {
    route.name !== 'Favorites' &&
      navigation.navigate('MealDetails', {
        mealId: id,
      });
  };

  return (
    <OuterContainer>
      <Pressable
        onPress={handlePress}
        style={({pressed}) => pressed && {opacity: 0.5}}>
        <InnerContainer>
          <View>
            <StyledImage source={{uri: image}} />
            <Title>{title}</Title>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </InnerContainer>
      </Pressable>
    </OuterContainer>
  );
};

export default MealItem;

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  margin: 8px;
`;

const OuterContainer = styled.View`
  border-radius: 8px;
  margin: 16px;
  overflow: hidden;
  background-color: white;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.8);
`;

const InnerContainer = styled.View`
  border-radius: 8px;
  overflow: hidden;
`;

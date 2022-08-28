import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';

const MealDetailsScreen = () => {
  const route = useRoute();
  const mealId = route.params?.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <StyledImage source={{uri: selectedMeal?.imageUrl}} />
      <Text></Text>
      <View>
        <MealDetails
          duration={selectedMeal?.duration}
          affordability={selectedMeal?.affordability}
          complexity={selectedMeal?.complexity}
        />
      </View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
};

export default MealDetailsScreen;

const StyledImage = styled.Image``;

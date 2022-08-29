import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {Button, ScrollView, View} from 'react-native';
import styled from 'styled-components/native';
import List from '../components/meal-detail/List';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';

const MealDetailsScreen = ({navigation}) => {
  const route = useRoute();
  const mealId = route.params?.mealId;

  const handleButtonPress = () => {
    console.log('hello');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Add Fav!" onPress={handleButtonPress} />;
      },
    });
  }, [navigation, handleButtonPress]);

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <StyledImage source={{uri: selectedMeal?.imageUrl}} />
      <Title>{selectedMeal.title}</Title>
      <View>
        <MealDetails
          duration={selectedMeal?.duration}
          affordability={selectedMeal?.affordability}
          complexity={selectedMeal?.complexity}
        />
      </View>

      <ListContainer>
        <SubTitle>Ingerdients</SubTitle>
        <List selectedData={selectedMeal.ingredients} />
        <SubTitle>Steps</SubTitle>
        <List selectedData={selectedMeal.steps} />
      </ListContainer>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const StyledImage = styled.Image`
  width: 100%;
  height: 250px;
`;

const ListContainer = styled.View`
  max-width: 80%;
  align-self: center;
`;

const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin: 8px;
  color: white;
`;

const SubTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  margin: 8px;
  color: white;
`;

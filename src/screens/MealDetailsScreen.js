import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {Button, ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import List from '../components/meal-detail/List';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';
import I18n from '../localization/i18n';

const MealDetailsScreen = ({navigation}) => {
  const route = useRoute();
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const dispatch = useDispatch();
  const handleButtonPress = () => {
    dispatch({type: 'ADD_FAVORITE', payload: selectedMeal});
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Add Fav!" onPress={handleButtonPress} />;
      },
    });
  }, [navigation, handleButtonPress]);

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
        <SubTitle>{I18n.t('mealDetails.ingredients')}</SubTitle>
        <List selectedData={selectedMeal.ingredients} />
        <SubTitle>{I18n.t('mealDetails.steps')}</SubTitle>
        <List selectedData={selectedMeal.steps} />
      </ListContainer>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const StyledImage = styled.Image`
  width: 100%;
  height: ${({theme}) => theme.categoryHeight};
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
  color: ${({theme}) => theme.textColor.primary};
`;

const SubTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  margin: 8px;
  color: ${({theme}) => theme.textColor.primary};
`;

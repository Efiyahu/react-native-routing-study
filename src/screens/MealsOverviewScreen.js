import {FlatList, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import React, {useLayoutEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params?.categoryId;

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find(category => category.id === catId)?.title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(catId) >= 0,
  );

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        id={itemData.item.id}
      />
    );
  };

  return (
    <Container>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </Container>
  );
};

export default MealsOverviewScreen;

const Container = styled.View`
  flex: 1;
`;

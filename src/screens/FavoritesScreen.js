import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import MealDetails from '../components/MealDetails';
import MealItem from '../components/MealItem';

const FavoritesScreen = () => {
  const favorites = useSelector(state => state.favorites);

  console.log(favorites);

  return (
    <View>
    {favorites?.length > 0 &&<FlatList
        data={favorites}
        keyExtractor={favorites.id}
        renderItem={itemData => (
          <MealItem
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            id={itemData.item.id}
          />
        )}
      />}
    </View>
  );
};

export default FavoritesScreen;

import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import MealItem from '../components/MealItem';
import {favoritesSelector} from '../store/selectors/favorites';

const FavoritesScreen = () => {
  const {favorites} = useSelector(favoritesSelector);

  return (
    <View>
      {favorites && (
        <FlatList
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
        />
      )}
    </View>
  );
};

export default FavoritesScreen;

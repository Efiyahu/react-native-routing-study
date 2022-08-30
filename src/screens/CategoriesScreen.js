import {FlatList, Switch, View} from 'react-native';
import React, {useContext} from 'react';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';
import styled from 'styled-components/native';
import I18n from '../localization/i18n';
import {EnableContext} from '../contexts/EnableContext';

const CategoriesScreen = ({navigation}) => {
  const {enabled, setEnabled} = useContext(EnableContext);
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {categoryId: itemData.item.id});
    };

    return (
      <CategoryGridTile
        title={I18n.t(`meals.${itemData.item.title}`)}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View>
      <SwitchContainer>
        <SwitchText>{I18n.t('common.switchLanguage')}</SwitchText>
        <Switch
          value={enabled}
          onValueChange={() => setEnabled(prev => !prev)}
        />
      </SwitchContainer>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const SwitchContainer = styled.View`
  align-self: center;
  align-items: center;
  margin: ${({theme}) => theme.margin.large};
`;

const SwitchText = styled.Text`
  color: white;
  margin-bottom: ${({theme}) => theme.margin.medium};
`;

import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PostsScreen from '../screens/PostsScreen';
import {StatusBar} from 'react-native';
import PostScreen from '../screens/PostScreen';
import {theme} from '../styles/theme';
import I18n, {setLanguage} from '../localization/i18n';
import {EnableContext} from '../contexts/EnableContext';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const {enabled} = useContext(EnableContext);
  useEffect(() => {
    setLanguage(enabled ? 'he' : 'en');
  }, [enabled]);

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: theme.headerColor},
          headerTintColor: theme.headerTintColor,
          sceneContainerStyle: {backgroundColor: theme.sceneContainerStyle},
          drawerContentStyle: {backgroundColor: theme.drawerContentStyle},
          drawerInactiveTintColor: theme.drawerInactiveTintColor,
          drawerActiveBackgroundColor: theme.drawerActiveBackgroundColor,
        }}>
        <Drawer.Screen
          name={I18n.t('screenNames.categories')}
          component={CategoriesScreen}
          initialParams={{enabled}}
        />
        <Drawer.Screen
          name={I18n.t('screenNames.favorites')}
          component={FavoritesScreen}
        />
        <Drawer.Screen
          name={I18n.t('screenNames.posts')}
          component={PostsScreen}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: theme.headerColor},
          headerTintColor: theme.headerTintColor,
          contentStyle: {backgroundColor: theme.contentStyle},
        }}>
        <Stack.Screen
          name="MealsCategories"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

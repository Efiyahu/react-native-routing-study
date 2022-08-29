import React from 'react';
import {Button, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'rgb(40,40,40)'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: 'rgb(29,29,29)'},
          drawerContentStyle: {backgroundColor: 'rgb(45,45,45)'},
          drawerInactiveTintColor: 'white',
          drawerActiveBackgroundColor: '#eee',
        }}>
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'rgb(40,40,40)'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: 'rgb(29,29,29)'},
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

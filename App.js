import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'rgba(29,29,29,.8)'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: 'rgba(29,29,29,.9)'},
        }}>
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
          }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

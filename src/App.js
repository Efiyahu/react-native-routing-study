import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

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
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <ThemeProvider theme={theme}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

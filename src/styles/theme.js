import {sizes, small, medium, large, extraLarge, SW, SH} from './variables';

export const theme = {
  headerColor: 'rgb(40,40,40)',
  headerTintColor: 'rgb(255,255,255)',
  sceneContainerStyle: 'rgb(29,29,29)',
  drawerContentStyle: 'rgb(40,40,40)',
  drawerInactiveTintColor: 'white',
  drawerActiveBackgroundColor: '#eee',
  contentStyle: 'rgb(29,29,29)',
  listColor: '#e2b497',
  light: 'white',

  categoryHeight: `${SH / 4}px`,
  postHeight: `${SH / 6}px`,

  textColor: {
    primary: 'white',
    dark: 'black',
    alert: 'red',
    list: '#351401',
  },

  fontSizes: {
    ...sizes,
  },

  margin: {
    small,
    medium,
    large,
    extraLarge,
  },
};

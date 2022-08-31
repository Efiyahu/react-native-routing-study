import {css} from 'styled-components';
import {
  fontSize,
  black,
  lightBlack,
  lightOrange,
  darkWhite,
  white,
  brown,
  small,
  medium,
  large,
  extraLarge,
  SH,
  red,
} from './variables';

export const theme = {
  headerColor: lightBlack,
  headerTintColor: white,
  sceneContainerStyle: black,
  drawerContentStyle: lightBlack,
  drawerInactiveTintColor: white,
  drawerActiveBackgroundColor: darkWhite,
  contentStyle: black,
  listColor: lightOrange,
  light: white,

  categoryHeight: `${SH / 4}px`,
  postHeight: `${SH / 6}px`,

  textColor: {
    primary: white,
    dark: black,
    alert: red,
    list: brown,
  },

  fontSizes: {
    ...fontSize,
  },

  margin: {
    small,
    medium,
    large,
    extraLarge,
  },

  get clickedButtonStyle() {
    return css`
      opacity: 0.8;
      transform: scale(1.01);
    `;
  },
};

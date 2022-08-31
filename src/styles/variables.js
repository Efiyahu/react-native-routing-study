import {Dimensions} from 'react-native';
import {round} from 'react-native-reanimated';

export const SW = Dimensions.get('window').width;
export const SH = Dimensions.get('window').height;

export const lightBlack = 'rgb(40,40,40)';
export const black = 'rgb(29,29,29)';
export const white = 'rgb(255,255,255)';
export const darkWhite = '#eee';
export const lightOrange = '#e2b497';
export const brown = '#351401';
export const red = 'red';

// font sizes
export const fontSize = {
  small: round(SW / 50),
  medium: round(SW / 20),
  large: round(SW / 15),
};

// margins / paddings:
export const small = '4px';
export const medium = '6px';
export const large = '8px';
export const extraLarge = '16px';

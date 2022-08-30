import {Dimensions} from 'react-native';
import {round} from 'react-native-reanimated';

export const SW = Dimensions.get('window').width;
export const SH = Dimensions.get('window').height;

// font sizes
export const sizes = {
  small: round(SW / 50),
  medium: round(SW / 20),
  large: round(SW / 15),
};

// margins / paddings:
export const small = '4px';
export const medium = '6px';
export const large = '8px';
export const extraLarge = '16px';

import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

/**
 * Check device
 */
export const isIphoneX = () => {
  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height >= 812 || width >= 812)
  );
};

/**
 * Http query builder
 * @param d     Http paramter
 */
export const buildURLQuery = (d: any) =>
  Object.keys(d)
    .filter(k => d[k] !== null)
    .map(k => [k, d[k]].map(encodeURIComponent).join('='))
    .join('&');

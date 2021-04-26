import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import * as types from './types';
import { SelectedTheme } from './userAction';

export const getTheme = () => {
  return async (dispatch: any) => {
    const getSelectedTheme = await AsyncStorage.getItem('themeType');
    if (getSelectedTheme) {
      let getThemeParsed = JSON.parse(getSelectedTheme);
      if (getThemeParsed) {
        dispatch(SelectedTheme(getThemeParsed));
        setTimeout(() => {
          SplashScreen.hide();
        }, 500);
      }
    }
  };
};
export const setTheme = (action: any) => {
  AsyncStorage.setItem('themeType', JSON.stringify(action));
  return async (dispatch: any) => {
    dispatch(SelectedTheme(action));
  };
};
export const initApp = () => {
  return (dispatch: any) => {
    dispatch(getTheme());
    dispatch({
      type: types.INIT_APP,
      payload: {}
    });
  };
};

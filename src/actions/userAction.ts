import * as types from './types';
export const SelectedTheme = (themeType: any) => (
  {
  
  type: types.SET_THEME,
  payload: { themeType }
});

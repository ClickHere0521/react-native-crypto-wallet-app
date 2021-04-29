import * as types from './types';
export const SelectedTheme = (themeType: any) => (
  {

    type: types.SET_THEME,
    payload: { themeType }
  });

export const UpdateRemainBtc = (remainBtc: any) => (
  {
    type: types.Update_Remain_Btc,
    payload: { remainBtc: remainBtc }
  })
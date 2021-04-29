import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  loading: false,
  isModalShow: false,
  remainBtc: 18
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_THEME:
      return { ...state, ...action.payload };
    case types.Update_Remain_Btc:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;

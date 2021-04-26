import { BackHandler } from 'react-native';

import * as types from '../actions/types';

const backHandler = () => {
  return (dispatch: any, getState: any) => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { nav, user } = getState();
      const { index, routes } = nav;
      const { length } = routes[index].routes;
      if (length === 1) {
        const { lastBack } = user;
        const currentTime = new Date().getTime();
        if (!(!!lastBack && lastBack + 10 * 1000 > currentTime)) {
          dispatch({
            type: types.SET_LAST_BACK_TIME,
            payload: {
              lastBack: currentTime
            }
          });
        } else {
          return false;
        }
      } else {
        dispatch({
          type: 'Navigation/BACK'
        });
      }
      return true;
    });
  };
};

export default backHandler;

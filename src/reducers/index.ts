import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import userReducer from './UserReducer';

export default combineReducers({
  nav: NavigationReducer,
  user: userReducer
});

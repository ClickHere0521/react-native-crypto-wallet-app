import { createReduxContainer } from 'react-navigation-redux-helpers';
import AppNavigator from './AppNavigation';

const App = createReduxContainer(AppNavigator);
export default App;

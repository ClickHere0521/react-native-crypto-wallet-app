/**
 *  Navigation Routes defind
 */
import { createStackNavigator } from 'react-navigation-stack';

import DashBoardScreen from '../containers/DashBoardScreen/DashBoardScreen';
import SplashScreen from '../containers/SplashScreen/SplashScreen';
import SwiperSlideScreen from '../containers/SwiperScreen/SwiperScreen';
import WelcomeScreen from '../containers/WelcomeScreen/WelcomeScreen';
import SecurityScreen from '../containers/SecurityScreen/SecurityScreen';
import ProfileScreen from '../containers/ProfileScreen/ProfileScreen';
import RecoveryPhraseScreen from '../containers/RecoveryPhraseScreen/RecoveryPhraseScreen';
import ContactUsScreen from '../containers/ContactUs/ContactUs';
import SettingScreen from '../containers/SettingScreen/SettingScreen';
import RestoreWalletScreen from '../containers/RestoreWallet/RestoreWallet';
import RestoreWalletSecond from '../containers/RestoreWalletSecond/RestoreWalletSecond';
import WalletScreen from '../containers/WalletScreen/WalletScreen';
import RecivedAmountScreen from '../containers/ReceivedAmountScreen/ReceivedAmountScreen';
import SendAmountScreen from '../containers/SendAmountScreen/SendAmountScreen';
import SelectCurrencyScreen from '../containers/SelectCurrency/SelectCurrency';
import TransactionDetailsScreen from '../containers/TransactionDetails/TransactionDetails';
import SummaryScreen from '../containers/Summary/SummaryScreen';
import RestoreSuccessfulScreen from '../containers/RestoreSuccessful/RestoreSuccessful';
import BeingwatchedScreen from '../containers/Beingwatched/BeingwatchedScreen';
import SecurityEnableScreen from '../containers/SecurityEnable/SecurityEnableScreen';
import PortfolioScreen from '../containers/PortfolioScreen/PortfolioScreen';
import SecurityWalletScreen from '../containers/SecurityWallet/SecurityWallet';

const AppNavigation = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Welcome: {
      screen: WelcomeScreen
    },
    SwiperScreen: {
      screen: SwiperSlideScreen
    },
    DashBoard: {
      screen: DashBoardScreen
    },
    SendAmount: {
      screen: SendAmountScreen
    },
    Security: {
      screen: SecurityScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    RecoveryPhrase: {
      screen: RecoveryPhraseScreen
    },
    ContactUs: {
      screen: ContactUsScreen
    },
    Setting: {
      screen: SettingScreen
    },
    RestoreWallet: {
      screen: RestoreWalletScreen
    },
    RestoreWalletSecond: {
      screen: RestoreWalletSecond
    },
    WalletScreen: {
      screen: WalletScreen
    },
    RecivedAmount: {
      screen: RecivedAmountScreen
    },
    SelectCurrency: {
      screen: SelectCurrencyScreen
    },
    TransactionDetails: {
      screen: TransactionDetailsScreen
    },
    SummaryScreen: {
      screen: SummaryScreen
    },
    RestoreSuccessful: {
      screen: RestoreSuccessfulScreen
    },
    Beingwatched: {
      screen: BeingwatchedScreen
    },
    SecurityEnable: {
      screen: SecurityEnableScreen
    },
    PortfolioScreen: {
      screen: PortfolioScreen
    },
    SecurityWallet: {
      screen: SecurityWalletScreen
    }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default AppNavigation;

import { Images, Colors } from '../theme';
export const Data = [
  {
    date: '26 march,2020',
    action: 'Recived',
    image: Images.LeftArrow,
    blueImage: Images.RecivedBlueIcon,
    time: '11:50 AM',
    point: '+0.054',
    doller: '$3.39'
  },
  {
    date: '26 march,2020',
    action: 'send',
    image: Images.RightArrow,
    blueImage: Images.SendBlueIcon,
    time: '11:50 AM',
    point: '+0.054',
    doller: '$3.39'
  }
];
export const DashBoardGraphData = [
  {
    key: 1,
    value: 50,
    svg: { fill: 'rgb(247,147,26)' }
  },
  {
    key: 2,
    value: 50,
    svg: { fill: 'rgb(85,255,208)' }
  },
  {
    key: 3,
    value: 50,
    svg: { fill: 'rgb(84,188,255)' }
  }
];
export const DashBoardFlatListData = [
  {
    key: 'BTC ',
    images: Images.BitCoinImage
  },
  {
    key: 'DASH',
    images: Images.dashLogo
  },
  {
    key: 'USDT',
    images: Images.UsdtLogo
  }
];
export const FlatListProfileData = [
  {
    title: 'Secuirty',
    subTitle: 'Lorem, ipsum dolor sit amet',
    image: Images.Security,
    blueImage: Images.SecurityBlueIcon
  },
  {
    title: 'Support',
    subTitle: 'Lorem, ipsum dolor sit amet',
    image: Images.HoursSupport,
    blueImage: Images.SupportBlueIcon
  }
];
export const RecoveryFlatListPhrase = [
  {
    title: 'plastic'
  },
  {
    title: 'Inhale'
  },
  {
    title: 'Thunder'
  },
  {
    title: 'Monster'
  },
  {
    title: 'Cradle'
  },
  {
    title: 'Practies'
  },
  {
    title: 'plastic'
  },
  {
    title: 'plastic'
  },
  {
    title: 'Inhale'
  },
  {
    title: 'Thunder'
  },
  {
    title: 'Monster'
  },
  {
    title: 'Cradle'
  }
];
export const RecoveryFlatListBlankPhrase = [
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  },
  {
    title: '----------'
  }
];
export const RestoredWalletFlatListPhrase = [
  {
    title: 'plastic'
  },
  {
    title: 'Inhale'
  },
  {
    title: 'Thunder'
  },
  {
    title: 'Monster'
  },
  {
    title: 'Cradle'
  },
  {
    title: 'Practies'
  }
];
export const SecuirtyFlatListData = [
  {
    title: 'Backup',
    subTitle:
      'Lorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit amet',
    image: Images.BackupImage,
    blueImage: Images.BackupBlueIcon,
    endTitle: 'Lorem, ipsum dolor sit amet',
    status: false
  },
  {
    title: 'Secure With a Passcode',
    subTitle:
      'Lorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit amet',
    image: Images.LockIconImage,
    blueImage: Images.LockBlueIcon,
    status: true
  }
];
export const SettingFlatListdata = [
  {
    title: 'Enable Notifications',
    subTitle: 'Show a notification when  funds are received',
    image: Images.BellImage,
    blackImage: Images.BellIconBlue,
    SwitchBtn: true,
    currency: false,
    touchable: false
  },
  {
    title: 'Enable Sounds',
    subTitle: 'Play sounds when sending receving &  exechanging funds.',
    image: Images.SoundImage,
    blackImage: Images.SoundBlueIcon,
    SwitchBtn: true,
    currency: false,
    touchable: false
  },
  {
    title: 'Currency',
    subTitle: 'set your perferred local Currency',
    image: Images.CurrencyImage,
    blackImage: Images.DollerBlueIcon,
    SwitchBtn: false,
    currency: true,
    touchable: true
  },
  {
    title: 'Restore Wallet',
    subTitle:
      'Overwrite your current Mobile Wallet using a 12-word recovery pharse',
    image: Images.RestoredWalletImage,
    blackImage: Images.RestorIconBlue,
    SwitchBtn: false,
    currency: false,
    touchable: true
  },
  {
    title: 'Theme',
    subTitle: 'Change your Screens Theme',
    image: Images.DarkThemeIcon,
    blackImage: Images.LightThemeIcon,
    SwitchBtn: true,
    currency: false,
    touchable: false
  }
];
export const SelectCurrencyData = [
  {
    flag: Images.AustraliaFlag,
    name: 'AUD',
    currency: 'Australian Dollar'
  },
  {
    flag: Images.BrazilFlag,
    name: 'BRL',
    currency: 'Brazilian Real'
  },
  {
    flag: Images.CanadaFlag,
    name: 'CAD',
    currency: 'Canadian Dollar'
  },
  {
    flag: Images.SwitzerlandFlag,
    name: 'CHF',
    currency: 'Swiss France'
  },
  {
    flag: Images.ChinaFlag,
    name: 'CNY',
    currency: 'Chinese Yuan'
  }
];

export const TransactionFlatListData = [
  {
    title: 'Received',
    subtitle: '+0.054',
    image: false,
    subtitleTextColor: Colors.orange,
    subtitleLightTextColor: Colors.orange,
    touchable: false
  },
  {
    title: 'Timestamp',
    subtitle: '26 March 2020, 11:45 AM',
    image: false,
    subtitleTextColor: Colors.white,
    subtitleLightTextColor: Colors.black,
    touchable: false
  },
  {
    title: 'Deposited to',
    subtitle: '147zxcvbnm258asdfghjrr36qwertyuiop',
    image: false,
    subtitleTextColor: Colors.niceBlue,
    subtitleLightTextColor: Colors.niceBlue,
    touchable: false
  },
  {
    title: 'Received from',
    subtitle: '147zxcvbnm258asdfghjrr36qwertyuiop',
    image: false,
    subtitleTextColor: Colors.niceBlue,
    subtitleLightTextColor: Colors.niceBlue,
    touchable: false
  },
  {
    title: 'Transaction ID',
    subtitle: '147zxcvbnm258asdfghjrr36qwertyuiop',
    image: false,
    subtitleTextColor: Colors.niceBlue,
    subtitleLightTextColor: Colors.niceBlue,
    touchable: false
  },
  {
    title: 'Now',
    subtitle: '$3.45',
    image: false,
    subtitleTextColor: Colors.white,
    subtitleLightTextColor: Colors.black,
    touchable: false
  },
  {
    title: '26 March',
    subtitle: '$3.38',
    image: false,
    subtitleTextColor: 'white',
    subtitleLightTextColor: Colors.black,
    touchable: false
  },
  {
    title: 'Any problem with this transaction?',
    subtitle: 'Contact Support',
    image: true,
    subtitleTextColor: Colors.niceBlue,
    subtitleLightTextColor: Colors.niceBlue,
    touchable: true
  }
];
export const SummaryFlatListData = [
  {
    name: 'USDT',
    percentage: '72.61%',
    image: Images.UsdtLogo
  },
  {
    name: 'DASH',
    percentage: '72.61%',
    image: Images.dashLogo
  },
  {
    name: 'BTC',
    percentage: '72.61%',
    image: Images.BitCoinImage
  }
];
export const PortfolioFlatListData = [
  {
    name: 'USDT',
    percentage: '72.61%',
    image: Images.UsdtIcon
  },
  {
    name: 'DASH',
    percentage: '13.27%',
    image: Images.DashIcon
  },
  {
    name: 'BTC',
    percentage: '1.85%',
    image: Images.BtcIcon
  }
];
export const DashBoradModalData = [
  {
    name: 'Portfolio Value'
  },
  {
    name: 'Name'
  },
  {
    name: '24H Volume'
  },
  {
    name: 'Market Cap'
  },
  {
    name: '24H Change'
  }
];
export const ProfileModalData = [
  {
    name: 'Enable/Disable Assets'
  },
  {
    name: 'Show Assets with Balance'
  },
  {
    name: 'Show All Assets'
  },
  {
    name: 'Market Cap'
  },
  {
    name: 'Hide All Assets'
  }
];
export const ProfileFlatListData = [
  {
    subtitle: 'BTC',
    name: 'Bitcoin',
    image: Images.BitCoinImage
  },
  {
    subtitle: 'DASH',
    name: 'Dash',
    image: Images.dashLogo
  },
  {
    subtitle: 'USDT',
    name: 'Tether Usd  ',
    image: Images.UsdtLogo
  }
];
export const BitCoinGraphData = [
  55,
  50,
  60,
  70,
  90,
  80,
  65,
  25,
  30,
  5,
  40,
  30,
  47,
  70,
  55,
  99,
  55,
  65,
  40,
  45,
  45
];
export const xdata = ['24H', '7D', '1M', '3M', '6M', '1Y'];

import React from 'react';
import { View, Image,Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '../../components';
import styles from './Styles/SplashScreen';
import { Images } from '../../theme';
import { initApp } from '../../actions';
import Splash from 'react-native-splash-screen';

export interface Props {
  navigation: any;
  initApp: any;
  addSelectedTheme: any;
  themeType: any;
}

class SplashScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    props.initApp();
  }

  componentDidMount() {
    const { navigation } = this.props;
    if (Platform.OS === 'android') {
      Splash.hide();
    }
    setTimeout(() => {
      navigation.navigate('SwiperScreen');
    }, 200);
  }

  render() {
    return (
      <Container safeAreaView={false}>
        <View style={styles.bgImgView}>
          <Image source={Images.DecryptoLogoIcon} style={styles.logo} />
        </View>
      </Container>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ initApp }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

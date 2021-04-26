import React from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Images, Colors } from '../../theme';
import darkStyle from './Style/SwiperScreen';
import lightStyle from './Style/SwiperLightScreen';
import Swiper from 'react-native-swiper';
import { SeparatorLine, Container } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { SelectedTheme } from './../../actions/userAction';
import onBoading, { onBoaringProps } from '../../constants/OnBoarding';
const { leftW, rightW } = require('../../theme/Images');
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}
interface Stage {
  index: number;
  leftBtnSelected?: boolean;
  rightBtnSelected?: boolean;
}

class SwiperScreen extends React.PureComponent<Props, Stage> {
  static navigationOptions = {
    gestureEnabled: false
  };

  swiperRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  componentDidMount = async () => {};

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  };
  backHandler = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };
  renderActionBarBtn(isLeft = false) {
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    const { leftBtnSelected, rightBtnSelected, index } = this.state;
    let img = null;
    if (isLeft) {
      img =
        leftBtnSelected === true
          ? Images.LeftArrowWhiteImage
          : themeType === 'light'
          ? Images.LeftBlueArrowImage
          : Images.LeftArrowImage;
    } else {
      img =
        rightBtnSelected === true
          ? Images.RightArrowWhiteImage
          : themeType === 'light'
          ? Images.RightBlueArrowImage
          : Images.RightArrowImage;
    }
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.bottomActionBarBtn}
        onPress={() => {
          if (isLeft) {
            if (index !== 0) {
              this.swiperRef.scrollBy(-1);
            }
          } else if (index !== 2) {
            this.swiperRef.scrollBy(1);
          } else {
            navigation.navigate('GetStarted');
          }
        }}
        onPressIn={() =>
          this.setState({ rightBtnSelected: !isLeft, leftBtnSelected: isLeft })
        }
        onPressOut={() =>
          this.setState({ rightBtnSelected: false, leftBtnSelected: false })
        }>
        <LinearGradient
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
          colors={
            (isLeft && leftBtnSelected) ||
            (!isLeft && rightBtnSelected) === true
              ? [Colors.niceBlue, Colors.blueWithPurple]
              : ['transparent', 'transparent']
          }
          style={styles.linearGradientCircle}>
          <Image source={img} style={styles.arrow} />
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  renderActionBar() {
    const { index } = this.state;
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <View style={styles.bottomActionBar}>
        {this.renderActionBarBtn(true)}
        {this.renderActionBarBtn()}
        <TouchableOpacity
          style={styles.bottomActionBarBtn}
          onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.skipTxt}>{index !== 2 ? 'SKIP' : 'NEXT'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderSlides(d: onBoaringProps) {
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <View key={'_key_' + d.title} style={styles.swiper}>
        <View style={styles.imageView}>
          <Image source={d.img} style={d.imgStyle} />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.title}> {d.title} </Text>
          <Text style={styles.description}> {d.desc} </Text>
        </View>
      </View>
    );
  }

  render() {
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Swiper
          key="onBorading"
          loop={false}
          ref={(c: any) => {
            this.swiperRef = c;
          }}
          paginationStyle={styles.paginationStyle}
          activeDotStyle={styles.activeDotStyle}
          dotStyle={styles.dotStyle}
          onMomentumScrollEnd={() => {
            setTimeout(() =>
              this.setState({ index: this.swiperRef.state.index })
            );
          }}>
          {onBoading.map(this.renderSlides.bind(this))}
        </Swiper>
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 0.0 }}
          colors={[Colors.niceBlue, Colors.blueWithPurple]}
          style={styles.linearGradient}
        />
        {this.renderActionBar()}
      </Container>
    );
  }
}

function mapStateToProps({ user }: any) {
  return { themeType: user.themeType };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ addSelectedTheme: SelectedTheme }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SwiperScreen);

import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  BackHandler,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, SwitchToggleView,Switch } from '../../components';
import { Images, Colors } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import darkStyle from './Styles/SecurityScreen';
import lightStyle from './Styles/SecurityLightScreen';
import SwitchToggle from 'react-native-switch-toggle';
import { SelectedTheme } from './../../actions/userAction';
import { SecuirtyFlatListData } from '../../config/const';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

export interface state {
  switchOn: any;
  status: any;
}
class SecurityScreen extends React.PureComponent<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      switchOn: true,
      status: false
    };
  }
  onPress2 = () => {
    this.setState({ switchOn: !this.state.switchOn });
  };
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  };
  backHandler = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };
  render() {
    const { navigation, themeType } = this.props;

    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Header
          leftImageIcon={
            themeType === 'light' ? Images.walletBlue : Images.wallet
          }
          leftIconClick={() => {
            navigation.navigate('DashBoard');
          }}
          title={'Security'}
          hideLeadText={themeType === 'light' ? true : false}
        />
        <Content>
          <FlatList
            data={SecuirtyFlatListData}
            contentContainerStyle={styles.paddingBottom}
            renderItem={({ item, index }: any) => (
              <View style={styles.shadowContainer}>
                <TouchableOpacity
                activeOpacity={0.9}
                  onPress={() => {
                    index === 0 && navigation.navigate('Beingwatched');
                    index === 1 && navigation.navigate('SecurityEnable');
                  }}
                  disabled={
                    index === 0
                      ? false
                      : this.state.switchOn === false
                      ? true
                      : false
                  }>
                  <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 0.8, y: 0.0 }}
                    colors={
                      themeType === 'light'
                        ? [Colors.white, Colors.white]
                        : [Colors.darkGreyBlueSecond, Colors.dusk]
                    }
                    style={styles.securityFlatListView}>
                    <View>
                      <View style={styles.securityInnerTextView}>
                        <Text style={styles.securityInnerTitleText}>
                          {item.title}
                        </Text>
                        <Image
                          source={
                            themeType === 'light' ? item.blueImage : item.image
                          }
                          style={styles.securityInnerImage}
                        />
                      </View>
                      <View style={styles.separatorLine}></View>
                      <View style={styles.securityInnerSubTitleView}>
                        <Text style={styles.securityInnerSubTitleText}>
                          {item.subTitle}
                        </Text>
                      </View>
                      {item.status === true && (
                        <View style={styles.switchToggleView}>
                          <Switch
                            switchOn={this.state.switchOn}
                            onPress={() => this.setState(this.onPress2)}
                          />
                        </View>
                      )}
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          />
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(SecurityScreen);

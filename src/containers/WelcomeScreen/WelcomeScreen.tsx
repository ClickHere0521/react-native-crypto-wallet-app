import React from 'react';
import { View, Image, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, SeparatorLine, Button } from '../../components';
import { Images } from '../../theme';
import darkStyle from './Styles/WelcomeScreen';
import lightStyle from './Styles/WelcomeLightScreen';
import { SelectedTheme } from './../../actions/userAction';
import { TouchableOpacity } from 'react-native-gesture-handler';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class WelcomeScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount = async () => {
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
        <View style={styles.mainView}>
          <Image source={Images.WelcomeScreenImage} style={styles.innerImage} />
        </View>
        <View style={styles.innerTextView}>
          <SeparatorLine />
          <Text style={styles.innerText}>WELCOME TO CRYPTO</Text>
          <Text style={styles.innerDescriptionText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industr Lorem Ipsum sim text.
          </Text>
        </View>
        <View style={styles.buttonView}>
          <Button
            isArrowBtnTrue
            onPress={() => navigation.navigate('DashBoard')}
            style={styles.shadowStyle}
            shadowRadius={15}
            buttonStyle={styles.getStartBtn}
            title={'GET STARTED'}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('RestoreWallet')}>
            <Text style={styles.bottomText}>I already have wallet</Text>
          </TouchableOpacity>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

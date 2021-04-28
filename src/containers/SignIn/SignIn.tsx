import React from 'react';
import { View, Image, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, SeparatorLine, Button } from '../../components';
import darkStyle from './Styles/SignInScreen';
import lightStyle from './Styles/SignInLightScreen';
import { SelectedTheme } from './../../actions/userAction';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class SignInScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "-",
      password: "-"
    }
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
        <View style={styles.innerTextView}>
          <SeparatorLine />
          <Text style={styles.innerText}>WELCOME TO OUR APP</Text>
          <Text style={styles.innerDescriptionText}>
            Here We can test the transaction from one wallet to another.
          </Text>
        </View>
        <View style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60
        }}>
          <TextInput
            style={{
              width: '80%',
              color: 'white',
              borderColor: 'white',
              borderWidth: 1,
            }}
            placeholderTextColor="grey"
            autoCompleteType="email"
            keyboardType="email"
            textContentType="email"
            placeholder={'Your email here'}
            onChangeText={(searchText: any) =>
              this.setState({ email: searchText })
            }
          />
          <TextInput
            style={{
              width: '80%',
              color: 'white',
              borderColor: 'white',
              borderWidth: 1,
              marginTop: 30
            }}
            type="password"
            placeholderTextColor="grey"
            autoCompleteType="password"
            keyboardType="password"
            textContentType="password"
            placeholder={'Your password here'}
            onChangeText={(searchText: any) =>
              this.setState({ email: searchText })
            }
          />
        </View>
        <View style={{marginTop: 200}}>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            style={styles.shadowStyle}
            shadowRadius={15}
            buttonStyle={styles.getStartBtn}
            title={'Create a new user'}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            isArrowBtnTrue
            onPress={() => navigation.navigate('DashBoard')}
            style={styles.shadowStyle}
            shadowRadius={15}
            buttonStyle={styles.getStartBtn}
            title={'Log In'}
          />
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('RestoreWallet')}>
            <Text style={styles.bottomText}>I already have wallet</Text>
          </TouchableOpacity> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

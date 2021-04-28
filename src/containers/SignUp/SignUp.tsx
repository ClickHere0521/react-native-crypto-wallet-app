import React from 'react';
import { View, Image, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, SeparatorLine, Button } from '../../components';
import darkStyle from './Styles/SignUpScreen';
import lightStyle from './Styles/SignUpLightScreen';
import { SelectedTheme } from './../../actions/userAction';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class SignUpScreen extends React.PureComponent<Props> {
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
  handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  render() {
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <View style={styles.innerTextView}>
          <SeparatorLine />
          <Text style={styles.innerText}>CREATE A NEW ACCOUNT</Text>
          <Text style={styles.innerDescriptionText}>
            Create a new account for this app.
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
              this.setState({ password: searchText })
            }
          />
        </View>
        <Text>{this.state.password}</Text>
        <View style={{ marginTop: 200 }}>
          <Button
            onPress={() => navigation.navigate('SignIn')}
            style={styles.shadowStyle}
            shadowRadius={15}
            buttonStyle={styles.getStartBtn}
            title={'I already have an account'}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            isArrowBtnTrue
            onPress={() => this.handleSignUp()}
            style={styles.shadowStyle}
            shadowRadius={15}
            buttonStyle={styles.getStartBtn}
            title={'Sign Up'}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

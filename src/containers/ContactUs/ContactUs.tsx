import React from 'react';
import { Text, TextInput, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Button } from '../../components';
import darkStyle from './Styles/ContactUs';
import lightStyle from './Styles/ContactUsLight';
import { View } from 'react-native';
import { Colors, Images } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { SelectedTheme } from './../../actions/userAction';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class ContactUs extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
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
        <Content>
          <Header
            title={'Contact Us'}
            leftImageIcon={
              themeType === 'light' ? Images.BackBlueArrow : Images.BackArrow
            }
            leftIconClick={() => {
              navigation.goBack(null);
            }}
            hideLeadText={themeType === 'light' ? true : false}
            onBackPress={() => navigation.goBack()}
          />
          <View>
            <Text style={styles.titleText}>How can we help you?</Text>
            <Text style={styles.descriptionText}>
            Wallet SH Support is ready to help 24 hours a day, 7 days a week.
            </Text>
          </View>
          <View style={[styles.shadowContainer, styles.marginTop]}>
            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.8, y: 0.0 }}
              colors={
                themeType === 'light'
                  ? [Colors.white, Colors.white]
                  : [
                      Colors.darkGreyBlueSecond,
                      Colors.darkGreyBlueSecond,
                      Colors.dusk
                    ]
              }
              style={[styles.emailView]}>
              <Text style={styles.emailLabelText}>Email Address</Text>
              <TextInput
                style={styles.emailTextInput}
                placeholder="Type your email address here!"
                placeholderTextColor={
                  themeType === 'light' ? Colors.normalDarkGrey : Colors.white
                }
              />
            </LinearGradient>
          </View>

          <View style={[styles.shadowContainer, styles.marginTop]}>
            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.8, y: 0.0 }}
              colors={
                themeType === 'light'
                  ? [Colors.white, Colors.white]
                  : [
                      Colors.darkGreyBlueSecond,
                      Colors.darkGreyBlueSecond,
                      Colors.dusk
                    ]
              }
              style={[styles.emailView]}>
              <Text style={styles.emailLabelText}>Message</Text>

              <View style={styles.InnerViewTextView}>
                <TextInput
                  multiline={true}
                  placeholder="Type your Message  here"
                  placeholderTextColor={
                    themeType === 'light' ? Colors.normalDarkGrey : Colors.white
                  }
                  keyboardType="default"
                  returnKeyType="done"
                  blurOnSubmit
                  style={styles.textInputValue}
                />
              </View>
            </LinearGradient>
          </View>
          <Button
            style={styles.shadowStyle}
            //onPress={() => navigation.navigate('RecoveryPhrase')}
            shadowRadius={15}
            buttonStyle={styles.sendBtn}
            title={'SEND'}
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);

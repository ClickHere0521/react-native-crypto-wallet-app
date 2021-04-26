import React from 'react';
import { Text, TouchableOpacity, View, Image, BackHandler,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button } from '../../components';
import darkSytle from './Styles/BeingwatchedScreen';
import lightStyle from './Styles/BeingwatchedLightScreen';
import { Images } from '../../theme';

import { SelectedTheme } from './../../actions/userAction';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class BeingwatchedScreen extends React.PureComponent<Props> {
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
    const { themeType, navigation } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkSytle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <View style={styles.mainView}>
          <View style={styles.innerImageView}>
            <Image
              source={  
                themeType === 'light' ? Images.BingLightIcon : Images.BingIcon
              }
              style={styles.innerImage}
            />
          </View>
          <Text style={styles.innerText}>Are you being watched?</Text>
          <Text style={styles.innerDescriptionText}>
            Anyone with recovery phrase can access your funds from anywhere. Do
            not show it to anyone!
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RecoveryPhrase');
            }}>
            <Text style={styles.learnMoreText}>View Recovery Phrase</Text>
          </TouchableOpacity>

          <Button
            onPress={() => navigation.goBack(null)}
            style={styles.shadowStyle}
            shadowRadius={15}
            buttonStyle={styles.getStartBtn}
            title={'BACK'}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(BeingwatchedScreen);

import React from 'react';
import { Text, TouchableOpacity, View, Image, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button } from '../../components';
import darkSytle from './Styles/RestoreSuccessful';
import lightStyle from './Styles/RestoreSuccessfulLight';
import { Images } from '../../theme';

import { SelectedTheme } from './../../actions/userAction';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class RestoreSuccessfulScreen extends React.PureComponent<Props> {
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
                themeType === 'light'
                  ? Images.RestoreSuccessLightIcon
                  : Images.RestoreSuccessIcon
              }
              style={styles.innerImage}
            />
          </View>
          <Text style={styles.innerText}>Restore Successful!</Text>
          <Text style={styles.innerDescriptionText}>
            You did it! Your assests are synced and ready for sending,
            receiving, and exchanging.
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>

          <Button
            onPress={() => navigation.navigate('RestoreWallet')}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestoreSuccessfulScreen);

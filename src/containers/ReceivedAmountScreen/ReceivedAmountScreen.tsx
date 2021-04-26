import React from 'react';
import { Text, Image, View, TouchableOpacity, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Button } from '../../components';
import darkStyle from './Styles/ReceivedAmountScreen';
import lightStyle from './Styles/ReceivedAmountLightScreen';
import { SelectedTheme } from '../../actions/userAction';
import { Images } from '../../theme';
import QRCode from 'react-native-qrcode-svg';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}
class RecivedAmountScreen extends React.PureComponent<Props> {
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
            leftImageIcon={
              themeType === 'light' ? Images.BackBlueArrow : Images.BackArrow
            }
            leftIconClick={() => {
              navigation.goBack();
            }}
            settingIcon
            rightImageIcon={
              themeType === 'light'
                ? Images.SettingLightImage
                : Images.SettingImage
            }
            rightIconClick={() => {
              navigation.navigate('Setting');
            }}
            title={'Recieve  Bitcoin '}
            hideLeadText={themeType === 'light' ? true : false}
          />
          <View style={styles.bitcoinImageView}>
            <Image source={Images.BitCoinImage} style={styles.bitcoinImage} />
            <View style={styles.squareShapeView}>
              <QRCode
                logoSize={50}
                size={150}
                value="1JAGtoJz5QFzys4H1PgokinKg748codsi"
              />
            </View>
            <Text style={styles.squareShapeBottomText}>Your BTC Address</Text>
            <View style={styles.qrCodeUrlTextView}>
              <View style={styles.qrCodeTextWidth}>
                <Text numberOfLines={1} style={styles.qrCodeUrlText}>
                  1JAGtoJz5QFzys4H1PgokinKg748codsi
                </Text>
              </View>
              <TouchableOpacity style={styles.copyUrlIconView}>
                <Image
                  source={
                    themeType === 'light'
                      ? Images.CopyUrlBlueIcon
                      : Images.CopyUrlIcon
                  }
                  style={styles.copyUrlIconStyle}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.qrCodeTextBottomText}>
              Tab Bitcoin Address To Copy
            </Text>
            <Button
              shadowRadius={15}
              buttonStyle={styles.shareBtn}
              title={'Share'}
            />
          </View>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecivedAmountScreen);

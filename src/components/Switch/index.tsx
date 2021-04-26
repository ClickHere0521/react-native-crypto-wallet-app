/* eslint-disable react/jsx-sort-props */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Animated,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Platform
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme';

interface Props {
  testID?: string;
  switchOn: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
  circleStyle?: ViewStyle;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
  circleColorOff?: string;
  circleColorOn?: string;
  duration?: number;
  type?: number;
  buttonText?: string;
  backTextRight?: string;
  backTextLeft?: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  textRightStyle?: StyleProp<TextStyle>;
  textLeftStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  // limitation: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202
  buttonContainerStyle?: StyleProp<ViewStyle> | any;
  rightContainerStyle?: StyleProp<ViewStyle> | any;
  leftContainerStyle?: StyleProp<ViewStyle> | any;
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerStyle: {
    width: '32rem',
    height: '10rem',
    borderRadius: '4rem',
    backgroundColor: 'rgb(227,227,227)',
    padding: '-1rem'
  },
  circleStyle: {
    width: '20rem',
    height: '20rem',
    borderRadius: '10rem',
    backgroundColor: Colors.white,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: {
          width: 2,
          height: 5
        },
        shadowOpacity: 0.5
      },
      android: {
        elevation: 5
      }
    })
  }
});

function SwitchToggle(props: Props): React.ReactElement {
  const [animXValue] = useState(new Animated.Value(props.switchOn ? 1 : 0));
  const getStart = (): number | object | undefined => {
    // prettier-ignore
    return props.type === undefined
      ? 0
      : props.type === 0
        ? 0
        : styles.containerStyle && styles.containerStyle.padding
          ? (styles.containerStyle.padding as number) * 2
          : {};
  };

  const runAnimation = (): void => {
    const animValue = {
      fromValue: props.switchOn ? 0 : 1,
      toValue: props.switchOn ? 1 : 0,
      duration: props.duration
    };
    Animated.timing(animXValue, animValue).start();
  };
  const endPos =
    styles.containerStyle && styles.circleStyle
      ? (styles.containerStyle.width as number) -
        ((styles.circleStyle.width as number) +
          (styles.containerStyle.padding as number) * 2)
      : 0;
  const circlePosXEnd = endPos;
  const [circlePosXStart] = useState(getStart());

  const prevSwitchOnRef = useRef<boolean>();
  const prevSwitchOn = !!prevSwitchOnRef.current;
  useEffect(() => {
    prevSwitchOnRef.current = props.switchOn;
    if (prevSwitchOn !== props.switchOn) {
      runAnimation();
    }
  }, [prevSwitchOn, props.switchOn, runAnimation]);

  const generateRightText = (): React.ReactElement => {
    return (
      <Animated.View style={props.rightContainerStyle}>
        <Text style={props.textRightStyle}>{props.backTextRight}</Text>
      </Animated.View>
    );
  };

  const generateLeftText = (): React.ReactElement => {
    return (
      <Animated.View style={props.leftContainerStyle}>
        <Text style={props.textLeftStyle}>{props.backTextLeft}</Text>
      </Animated.View>
    );
  };

  const [niceBlue, setNiceBlue] = useState(
    `rgba(11, 97, 194, ${props.switchOn ? 1 : 0})`
  );
  const [blueWithPurple, setBlueWithAHintOfPurple] = useState(
    `rgba(84, 44, 161, ${props.switchOn ? 1 : 0})`
  );
  animXValue.addListener(({ value }) => {
    setNiceBlue(`rgba(11, 97, 194, ${value})`);
    setBlueWithAHintOfPurple(`rgba(84, 44, 161, ${value})`);
  });

  return (
    <TouchableOpacity
      testID={props.testID}
      onPress={props.onPress}
      activeOpacity={0.5}>
      <Animated.View
        style={[
          styles.container,
          styles.containerStyle,
          {
            backgroundColor: animXValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                props.backgroundColorOff as string | number,
                props.backgroundColorOn as string | number
              ] as string[] | number[]
            })
          }
        ]}>
        {generateLeftText()}
        <Animated.View
          style={[
            styles.circleStyle,
            {
              transform: [
                {
                  translateX: animXValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      circlePosXStart as string | number,
                      circlePosXEnd as string | number
                    ] as string[] | number[]
                  })
                }
              ]
            },
            props.buttonStyle
          ]}>
          <LinearGradient
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={[niceBlue, blueWithPurple]}
            style={styles.circleStyle}
          />
        </Animated.View>
        {generateRightText()}
      </Animated.View>
    </TouchableOpacity>
  );
}
SwitchToggle.defaultProps = {
  switchOn: false,
  onPress: (): void => {},
  backgroundColorOn: Colors.lightBlueGrey,
  backgroundColorOff: 'rgb(215,215,215)',
  circleColorOff: Colors.white,
  circleColorOn: 'rgb(102,134,205)',
  duration: 300
};

export default SwitchToggle;

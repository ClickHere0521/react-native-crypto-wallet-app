/**
 * Helper class for font
 */
import _ from 'lodash';

// use post script names for font families
const Montserrat: any = {
  '100': { fontFamily: 'Montserrat-Thin' },
  '100italic': { fontFamily: 'Montserrat-ThinItalic' },
  '200': { fontFamily: 'Montserrat-Light' },
  '200italic': { fontFamily: 'Montserrat-LightItalic' },
  '300': { fontFamily: 'Montserrat-Regular' },
  '300italic': { fontFamily: 'Montserrat-Italic' },
  '400': { fontFamily: 'Montserrat-SemiBold' },
  '400italic': { fontFamily: 'Montserrat-MediumItalic' },
  '500': { fontFamily: 'Montserrat-SemiBold' },
  '500italic': { fontFamily: 'Montserrat-BoldItalic' },
  '600': { fontFamily: 'Montserrat-Black' },
  '600italic': { fontFamily: 'Montserrat-BlackItalic' },
  '700': { fontFamily: 'Montserrat-Black' },
  '700italic': { fontFamily: 'Montserrat-BlackItalic' }
};
const Roboto: any = {
  '100': { fontFamily: 'Roboto-Thin' },
  '100italic': { fontFamily: 'Robotot-ThinItalic' },
  '200': { fontFamily: 'Roboto-Light' },
  '200italic': { fontFamily: 'Roboto-LightItalic' },
  '300': { fontFamily: 'Roboto-Regular' },
  '300italic': { fontFamily: 'Roboto-Italic' },
  '400': { fontFamily: 'Roboto-SemiBold' },
  '400italic': { fontFamily: 'Roboto-MediumItalic' },
  '500': { fontFamily: 'Roboto-SemiBold' },
  '500italic': { fontFamily: 'Roboto-BoldItalic' },
  '600': { fontFamily: 'Roboto-Black' },
  '600italic': { fontFamily: 'Roboto-BlackItalic' },
  '700': { fontFamily: 'Roboto-Black' },
  '700italic': { fontFamily: 'Roboto-BlackItalic' }
};


const FONTS: any = {
  Montserrat,Roboto
};

/**
 * Helper class for cross-platform font styles
 */
class FontHelper {
  static font(fontParams: {
    fontFamily?: any;
    fontStyle?: any;
    fontWeight?: string;
  }) {
    const fontFamily = fontParams.fontFamily || 'Montserrat';
    const fontWeight = fontParams.fontWeight || '300';
    const fontStyle = fontParams.fontStyle || '';

    return {
      ..._.omit(fontParams, [fontFamily, fontFamily, fontStyle]),
      ...FONTS[fontFamily][fontWeight + fontStyle]
    };
  }
}

export default FontHelper;



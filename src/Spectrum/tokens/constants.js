import { fontType, weightType } from "./fonts";

/**
 * follow the format below when adding new typography scales
 * ↓ ↓ ↓ ↓ ↓
 *
 * 'scaleFactor': [font-size, line-height]
 *
 */
const typographyScale = {
  "7": [2.75, 3.25],
  "6": [2.5, 3],
  "5": [2.0625, 2.75],
  "4": [1.75, 2.25],
  "3": [1.5625, 2],
  "2": [1.3125, 1.75],
  "1": [1.125, 1.5],
  "0": [1, 1.5],
  "-1": [0.875, 1.25],
  "-2": [0.75, 1.25]
};

/**
 * follow the format below when adding new typography styles
 * ↓ ↓ ↓ ↓ ↓
 *
 * name(caseSensitive): { scale: typographyScale[n], style: [defaultFontStyle, [,variantFontStyle]], weight: defaultFontWeight }
 *
 */
const typographyStyle = {
  Hero: {
    scale: typographyScale[7],
    style: [fontType.DISPLAY],
    weight: weightType.STANDARD
  },
  Headline: {
    scale: typographyScale[6],
    style: [fontType.DISPLAY],
    weight: weightType.STANDARD
  },
  TitleAlpha: {
    scale: typographyScale[5],
    style: [fontType.DISPLAY],
    weight: weightType.STANDARD
  },
  TitleBravo: {
    scale: typographyScale[4],
    style: [fontType.DISPLAY],
    weight: weightType.STANDARD
  },
  TitleCharlie: {
    scale: typographyScale[3],
    style: [fontType.DISPLAY],
    weight: weightType.HEAVY
  },
  Heading: {
    scale: typographyScale[2],
    style: [fontType.DISPLAY],
    weight: weightType.HEAVY
  },
  Subhead: {
    scale: typographyScale[1],
    style: [fontType.DISPLAY],
    weight: weightType.HEAVY
  },
  Body: {
    scale: typographyScale[0],
    style: [fontType.TEXT, fontType.DISPLAY],
    weight: weightType.STANDARD
  },
  Footnote: {
    scale: typographyScale[-1],
    style: [fontType.TEXT, fontType.DISPLAY],
    weight: weightType.STANDARD
  },
  Micro: {
    scale: typographyScale[-2],
    style: [fontType.TEXT, fontType.DISPLAY],
    weight: weightType.STANDARD
  }
};

export { fontType, weightType, typographyStyle };

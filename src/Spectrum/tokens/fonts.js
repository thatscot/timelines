export const fontType = {
  DISPLAY: "display",
  TEXT: "text"
};

export const weightType = {
  STANDARD: "standard",
  HEAVY: "heavy"
};

/**
 * follow the format below when adding new font stacks
 * ↓ ↓ ↓ ↓ ↓
 *
 * 'fontStackName': fontStackValue
 *
 */
export const fontStacks = {
  [fontType.DISPLAY]: '"Sky Text", "Trebuchet MS", Sans-Serif',
  [fontType.TEXT]: '"Source Sans Pro", Helvetica, Sans-Serif'
};

/**
 * follow the format below when adding new font weights
 * ↓ ↓ ↓ ↓ ↓
 *
 * 'fontStackName': {
 *  [weightVariant]: weightValue
 * }
 *
 */
export const fontWeights = {
  [fontType.DISPLAY]: {
    [weightType.STANDARD]: 300,
    [weightType.HEAVY]: 500,
    bold: 700 // used in edge case senario. e.g. rendering sky-logo looking font
  },
  [fontType.TEXT]: {
    [weightType.STANDARD]: 400,
    [weightType.HEAVY]: 700
  }
};

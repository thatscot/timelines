import { fontStacks, fontWeights } from "./fonts";
import { typographyStyle } from "./constants";

const Typography = (function (typographyStyle, { fontStacks, fontWeights }) {
  const optsType = ["style", "weight", "isUi"];

  function _validateOpts(opts) {
    for (let prop in opts) {
      if (!optsType.includes(prop)) {
        throw new SyntaxError(
          `(Typography) → Invalid prop "${prop}"! Please make sure prop name match one of the following: "${optsType.join(
            '" | "'
          )}"`
        );
      }
    }
  }

  function _validateStyles(styles) {
    let errorStr = "";
    for (let style in styles) {
      if (!Object.prototype.hasOwnProperty.call(styles[style], "scale")) {
        errorStr += `\n → Missing 'scale' property in typographyStyle['${style}']`;
      }
      if (!Object.prototype.hasOwnProperty.call(styles[style], "style")) {
        errorStr += `\n → Missing 'style' property in typographyStyle['${style}']`;
      }
      if (!Object.prototype.hasOwnProperty.call(styles[style], "weight")) {
        errorStr += `\n → Missing 'weight' property in typographyStyle['${style}']`;
      }
    }
    if (errorStr.length) {
      throw new SyntaxError(
        `Invalid style definition passed to Typography()  → ${errorStr}`
      );
    }
  }

  function _validateName(name, styles) {
    if (typeof name !== "string") {
      throw new TypeError(
        '(Typography.get(name: string, [opts])) → Missing font style name parameter! Example usage: Typography.get("Hero")'
      );
    } else {
      if (styles[name] === undefined) {
        throw new Error(
          `(Typography) → Invalid font style name! Choose from one of the following: [ "${Object.keys(
            styles
          ).join('" | "')}" ]`
        );
      }
      return;
    }
  }

  function _getType(name = "Body", { style, weight, isUi = false }, styles) {
    // First, validate name
    _validateName(name, styles);
    // Normalise type name and get its properties
    const typeProperties = styles[name];
    // Choose style if found in typeProperties, else fallback to default
    // Choose weight if found in fontWeights under given style, else fallback to default
    const defaultStyle =
      style && typeProperties.style.includes(style)
        ? style
        : typeProperties.style[0];
    const defaultWeight =
      weight && fontWeights[defaultStyle][weight]
        ? weight
        : typeProperties.weight;
    // Set the font families
    const fontFamily = fontStacks[defaultStyle];
    // Set the font weights
    const fontWeight = fontWeights[defaultStyle][defaultWeight];
    // Set the font sizes
    const fontSize = `${typeProperties.scale[0]}rem`;
    // If UI is true, shave 4 off the line-height
    const uiValue = isUi === true ? 0.25 : 0;
    // Set the line heights
    const lineHeight = `${typeProperties.scale[1] - uiValue}rem`;

    return `
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      line-height: ${lineHeight};
    `;
  }

  const typoPrototype = {
    get: function (name, opts = {}) {
      _validateOpts(opts);
      this.style = _getType(name, opts, typographyStyle);
      return this.style;
    }
  };

  const typography = {
    init: function () {
      // First, validate typographyStyle
      _validateStyles(typographyStyle);
      return Object.create(typoPrototype);
    }
  };
  // We are skipping a step here for convenience sake; so that we can call Typography.get() directly
  return typography.init();
})(typographyStyle, { fontStacks, fontWeights });

export { Typography };

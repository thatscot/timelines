// Overview:
// These colors are defined as an object of keys and value that match the latest UI specificaiton.
export const colors = {
  primary: {
    brand: {
      100: "#F2F8FC",
      200: "#D6E8F5",
      300: "#85BAE3",
      500: "#006FC4",
      700: "#00599D",
      900: "#004376"
    },
    highlight: {
      500: "#73ADD8"
    }
  },
  utility: {
    success: {
      100: "#D1F0D6",
      300: "#76D185",
      500: "#1BB334",
      700: "#168F2A",
      900: "#0B6121"
    },
    warning: {
      100: "#FFE6D4",
      300: "#FEB47F",
      500: "#FE8329",
      700: "#CC4C00",
      900: "#A83200"
    },
    danger: {
      100: "#FFD4DA",
      300: "#FF7D8F",
      500: "#FF2744",
      700: "#C7001A",
      900: "#801322"
    }
  },
  gradient: {
    yellowOrange: {
      start: "#FBEB00",
      end: "#FF6400"
    },
    orangePink: {
      start: "#FF6400",
      mid: ["#FF6400", "#FF5021", "#FF3C42", "#FF2863", "#FF1484", "#FF00A5"],
      end: "#FF00A5"
    },
    pinkPurple: {
      start: "#FF00A5",
      mid: ["#f522ac", "#da26bd", "#c32acd", "#a92ddc", "#9530e7", "#7b33f8"],
      end: "#6E00FF"
    },
    purpleAqua: {
      start: "#6E00FF",
      mid: ["#6934fc", "#5d3af6", "#515cf0", "#448cea", "#33bde4", "#1be9de"],
      end: "#00FFDC"
    }
  },
  neutral: {
    100: "#FFFFFF",
    150: "#FAFAFA",
    200: "#F1F1F1",
    300: "#EAEAEA",
    400: "#C0C0C0",
    500: "#9F9F9F",
    600: "#7F7F7F",
    700: "#4A4A4A",
    800: "#222222",
    900: "#000000"
  }
};

export const Color = (function (rootColors) {
  // could potentially bring rootColors in whereby blocking direct access (this would cause breaking change)
  const _colors = rootColors;

  function _validateColorKey(colorKey, colorConfig) {
    if (typeof colorConfig[colorKey] === "undefined") {
      throw new SyntaxError(
        `getColorValue() → Invalid colorKey value for "${colorKey}": "colorKey" prop must be one of following value: [ "${_colorKeysToArray(
          colorConfig
        ).join('" | "')}" ]`
      );
    }
  }

  /**
   * Retruns color value based on the color key path provided
   * @param {string} colorKey - '.' delimited string path .e.g. "primary.brand.500", "neutral.900", "gradient.pinkPurple.mid" .etc
   * @param {object} [colorConfig=_colors] - colorConfig object
   * @returns {string}
   */
  function _getColorValue(colorKey, colorConfig = _colors) {
    // terminate if color value found e.g. hex string or array of hex string
    if (colorConfig.constructor !== Object) {
      return colorConfig;
    }
    if (colorKey.indexOf(".") !== -1) {
      const keys = colorKey.split(/\.(.+)/);
      // validate if key exist in colorConfig object
      _validateColorKey(keys[0], colorConfig);
      return _getColorValue(keys[1], colorConfig[keys[0]]);
    } else {
      _validateColorKey(colorKey, colorConfig);
      return _getColorValue(colorKey, colorConfig[colorKey]);
    }
  }

  /**
   * Returns an array of color key breadcrumbs
   * @param {object} [colorConfig=_colors] - colorConfig object
   * @param {object} [ignoreList=[]] - a list of keys to bypass
   * @returns {string[]}
   */
  // based on the amazing work by Matjaz (Stack overflow legend \m/)
  function _colorKeysToArray(colorConfig = _colors, ignoreList = []) {
    const isObject = (val) => typeof val === "object" && !Array.isArray(val);

    const addDelimiter = (a, b) => (a ? `${a}.${b}` : b);

    const paths = (colorObj = {}, prefix = "") => {
      /* turn colorObj into [key, value] pair array
       * filter out colors from ignoreList
       * create delimited path at each round and pass it on to the next recursive call
       * call recursively if colorValue contains more config, else append delimited path to existing list
       */
      return Object.entries(colorObj)
        .filter(([key]) => !ignoreList.includes(key))
        .reduce((color, [key, value]) => {
          let fullPath = addDelimiter(prefix, key);
          return isObject(value)
            ? color.concat(paths(value, fullPath))
            : color.concat(fullPath);
        }, []);
    };

    return paths(colorConfig);
  }

  const colorPrototype = {
    get: function (colorKey, colorConfig = _colors) {
      return _getColorValue(colorKey, colorConfig);
    },
    getKeys: function (ignoreList = [], colorConfig = _colors) {
      return _colorKeysToArray(colorConfig, ignoreList);
    },
    allColors: rootColors
  };

  const color = {
    init: function () {
      return Object.create(colorPrototype);
    }
  };
  // We are skipping a step here for convenience sake; so that we can call color.get() directly without instantiating the Color class
  return color.init();
})(colors);

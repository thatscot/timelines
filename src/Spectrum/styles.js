import { Typography, Color, colors, hideVisually } from "./tokens";

const gradients = {
  ...colors.gradient,
  none: { start: "", end: "" }
};

export const getTypography = ({ uiType, isUi, uiFont, uiWeight }) =>
  Typography.get(uiType, { isUi: isUi, style: uiFont, weight: uiWeight });

export const getColor = ({ uiColor }) =>
  uiColor && `color: ${Color.get(uiColor)};`;

export const getVisibility = ({ isUiHidden }) => isUiHidden && hideVisually;

export const getAlignment = ({ uiTextAlign }) =>
  uiTextAlign && `text-align: ${uiTextAlign};`;

export const getGradientAlignment = ({ uiTextAlign }) => {
  if (uiTextAlign !== "center") {
    return uiTextAlign === "right"
      ? "justify-content: flex-end;"
      : "justify-content: flex-start;";
  }
  return `justify-content: ${uiTextAlign};`;
};

export const getGradientText = ({ uiGradientText }) => {
  return (
    uiGradientText &&
    `
    background: transparent;
    background-image: linear-gradient(90deg, ${gradients[uiGradientText].start} 10%, ${gradients[uiGradientText].end} 110%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    `
  );
};

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import {
  getAlignment,
  getColor,
  getTypography,
  getGradientText,
  getGradientAlignment,
  getVisibility
} from "./styles";
import { textAlignOptions, uiWeight } from "./constants";

const getTextContent = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  uiGradientText,
  uiType,
  uiFont,
  uiWeight,
  ...otherProps
}) => (
  <StyledText
    as={tag}
    isUi={isUi}
    isUiHidden={isUiHidden}
    uiColor={uiColor}
    uiTextAlign={uiTextAlign}
    uiType={uiType}
    uiFont={uiFont}
    uiWeight={uiWeight}
    uiGradientText={uiGradientText}
    {...otherProps}
  >
    {children}
  </StyledText>
);

const StyledContainer = styled("div")`
  width: 100%;
  display: flex;
  ${getGradientAlignment}
`;

const StyledText = styled("p")`  
  ${getVisibility}
  ${getTypography}
  ${(props) => (props.uiGradientText ? getGradientText : getColor)}
  ${(props) => (props.uiGradientText ? getGradientText : getAlignment)}
`;

const Hero = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  uiGradientText,
  ...otherProps
}) => {
  const textContent = getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiGradientText,
    uiType: "Hero",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });
  return uiGradientText ? (
    <StyledContainer uiTextAlign={uiTextAlign}>{textContent}</StyledContainer>
  ) : (
    textContent
  );
};

const Headline = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  uiGradientText,
  ...otherProps
}) => {
  const textContent = getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiGradientText,
    uiType: "Headline",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });
  return uiGradientText ? (
    <StyledContainer uiTextAlign={uiTextAlign}>{textContent}</StyledContainer>
  ) : (
    textContent
  );
};

const TitleAlpha = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  uiGradientText,
  ...otherProps
}) => {
  const textContent = getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiGradientText,
    uiType: "TitleAlpha",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });
  return uiGradientText ? (
    <StyledContainer uiTextAlign={uiTextAlign}>{textContent}</StyledContainer>
  ) : (
    textContent
  );
};

const TitleBravo = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  uiGradientText,
  ...otherProps
}) => {
  const textContent = getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiGradientText,
    uiType: "TitleBravo",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });
  return uiGradientText ? (
    <StyledContainer uiTextAlign={uiTextAlign}>{textContent}</StyledContainer>
  ) : (
    textContent
  );
};

const TitleCharlie = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  uiGradientText,
  ...otherProps
}) => {
  const textContent = getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiGradientText,
    uiType: "TitleCharlie",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });
  return uiGradientText ? (
    <StyledContainer uiTextAlign={uiTextAlign}>{textContent}</StyledContainer>
  ) : (
    textContent
  );
};

const Heading = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  uiGradientText,
  ...otherProps
}) => {
  const textContent = getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiGradientText,
    uiType: "Heading",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });
  return uiGradientText ? (
    <StyledContainer uiTextAlign={uiTextAlign}>{textContent}</StyledContainer>
  ) : (
    textContent
  );
};

const Subhead = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  uiGradientText,
  ...otherProps
}) => {
  const textContent = getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiGradientText,
    uiType: "Subhead",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });
  return uiGradientText ? (
    <StyledContainer uiTextAlign={uiTextAlign}>{textContent}</StyledContainer>
  ) : (
    textContent
  );
};

const Body = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  ...otherProps
}) =>
  getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiType: "Body",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });

const Footnote = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  ...otherProps
}) =>
  getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiType: "Footnote",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });

const Micro = ({
  children,
  isUi,
  isUiHidden,
  tag,
  uiColor,
  uiTextAlign,
  ...otherProps
}) =>
  getTextContent({
    children,
    isUi,
    isUiHidden,
    tag,
    uiColor,
    uiTextAlign,
    uiType: "Micro",
    uiFont: "display",
    uiWeight: "standard",
    ...otherProps
  });

const Text = {
  Hero,
  Headline,
  TitleAlpha,
  TitleBravo,
  TitleCharlie,
  Heading,
  Subhead,
  Body,
  Footnote,
  Micro
};

for (let key in Text) {
  Text[key].propTypes = {
    isUi: PropTypes.bool,
    isUiHidden: PropTypes.bool,
    tag: PropTypes.string,
    uiColor: PropTypes.string,
    uiGradientText: PropTypes.string,
    uiTextAlign: PropTypes.oneOf(textAlignOptions),
    uiWeight: PropTypes.oneOf(uiWeight)
  };
}

export { Text };

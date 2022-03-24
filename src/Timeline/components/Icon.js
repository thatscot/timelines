import React from "react";
import PropTypes from "prop-types";
import { uiSizes } from "./constants";
import { Color, Icons, useId } from "./tokens";
import styled from "@emotion/styled";

const getSize = (from) => (props) => uiSizes[props.uiSize][from];
const getColor = ({ uiColor }) => uiColor && `${Color.get(uiColor)};`;

const getIconSize = ({ uiCircled, uiSize }) => {
  if (uiCircled === "none") {
    return `width: inherit; height: inherit;`;
  }
  return `width: ${uiSizes[uiSize].iconSize}; height: ${uiSizes[uiSize].iconSize};`;
};

const getIconColor = ({ uiColor, uiCircled, uiGradient, uniqueId }) => {
  if (uiGradient) {
    return `url(#${uniqueId}-linearColor)`;
  }
  if (uiCircled === "filled") {
    return uiColor === "neutral.100"
      ? `${Color.get("neutral.200")}`
      : `${Color.get("neutral.100")}`;
  }
  return getColor({ uiColor });
};

const getCircledStyles = (props) => {
  return props.uiCircled === "outline"
    ? `
    border: solid ${getSize("border")(props)} ${getColor(props)};
    `
    : `
    background-color: ${getColor(props)};
    `;
};

const StyledIconContainer = styled("div")`
  width: ${getSize("width")};
  height: ${getSize("height")};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${(props) => props.uiCircled !== "none" && getCircledStyles(props)}
  > svg {
    ${getIconSize};
    > * {
      fill: ${getIconColor};
      > * {
        fill: ${getIconColor};
      }
    }
  }
`;

const Icon = ({
  id,
  dataTestId,
  uiSize = "medium",
  iconName,
  uiColor = "primary.brand.500",
  uiCircled = "none",
  uiGradient,
  uiDecorative,
  ...otherProps
}) => {
  const IconSVG = Icons[iconName];
  const circled = uiGradient ? "none" : uiCircled;

  let iconProps = {};
  const uniqueId = useId();

  if (uiGradient) {
    iconProps = {
      iconid: `icon-${uniqueId}`,
      gradient: uiGradient
    };
  }

  if (uiDecorative) {
    iconProps["aria-hidden"] = true;
  }

  return (
    <StyledIconContainer
      id={id}
      data-testid={dataTestId}
      uiSize={uiSize}
      uiColor={uiColor}
      uiCircled={circled}
      uiGradient={uiGradient}
      uniqueId={`icon-${uniqueId}`}
      {...otherProps}
    >
      <IconSVG {...iconProps} />
    </StyledIconContainer>
  );
};

Icon.propTypes = {
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  uiSize: PropTypes.oneOf(Object.keys(uiSizes)),
  iconName: PropTypes.string,
  uiColor: PropTypes.string,
  uiCircled: PropTypes.oneOf(["filled", "outline", "none"]),
  uiGradient: PropTypes.oneOf([
    "purpleAqua",
    "pinkPurple",
    "orangePink",
    "yellowOrange"
  ])
};

export { Icon };

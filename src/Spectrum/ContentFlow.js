import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import { scaleBase } from "./constants";

const blockSize = (num) => scaleBase * num;

// adding support for rem in the future
const convertSpacing = (spacingRhythm = 2, spacingUnit) => {
  switch (spacingUnit) {
    case "em":
      return blockSize(spacingRhythm) / 16;
    case "px":
      return blockSize(spacingRhythm);
    case "rem":
      return spacingRhythm / 2;
    default:
      return blockSize(spacingRhythm);
  }
};

const getSpacing = ({ uiGapRhythm = 2, uiGapUnit = "rem" }) => {
  const space = convertSpacing(uiGapRhythm, uiGapUnit);
  return `
    > * + * {
      margin-top: ${space}${uiGapUnit};
    }
  `;
};

// This selector targets direct descendants and adds a margin-top unit and value.
// This is used to apply a solid vertical rhythm to the flow of content.
const StyledContentFlow = styled("div")`
  ${getSpacing}
`;

const ContentFlow = ({
  ariaLabel,
  children,
  tag = "div",
  uiGapRhythm,
  uiGapUnit,
  ...otherProps
}) => {
  return (
    <StyledContentFlow
      as={tag}
      aria-label={ariaLabel}
      uiGapRhythm={uiGapRhythm}
      uiGapUnit={uiGapUnit}
      {...otherProps}
    >
      {children}
    </StyledContentFlow>
  );
};

ContentFlow.propTypes = {
  ariaLabel: PropTypes.string,
  tag: PropTypes.string,
  uiGapRhythm: PropTypes.number,
  uiGapUnit: PropTypes.string
};

export { ContentFlow };

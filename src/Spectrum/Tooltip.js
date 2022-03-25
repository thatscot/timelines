import React, { useState, useCallback } from "react";
import { usePopper } from "react-popper";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Color } from "./tokens";
import { Text } from "./Text";

const getBackground = (props) =>
  props.isDark ? Color.get("neutral.800") : Color.get("neutral.100");
const renderPopperStyles = (props) => props.popperStyle;

/**
 * <button> is used as a wrapper for tooltip target for accessibility reasons
 */
const TooltipTarget = styled.button`
  display: inline-block;
  background: transparent;
  appearance: none;
  border: none;
  padding: 0;
  margin: 0;
  line-height: normal;
  color: inherit;
  font: inherit;
  cursor: help;
`;

const TooltipArrow = styled.span`
  ${renderPopperStyles}

  position: absolute;
  height: 0px;
  width: 0px;

  &:before {
    position: absolute;
    content: "";
    display: block;
    height: 17px;
    width: 17px;
    background: ${getBackground};
  }

  [data-popper-placement^="top"] &:before,
  [data-popper-placement^="bottom"] &:before {
    border-radius: 4px 0px;
    transform: scaleY(0.7) translate(-8.5px, -12px) rotate(45deg);
  }

  [data-popper-placement^="right"] &:before,
  [data-popper-placement^="left"] &:before {
    border-radius: 0px 4px;
    transform: scaleX(0.7) translate(-12px, -8.5px) rotate(45deg);
  }

  [data-popper-placement^="right"] & {
    left: 0px;
  }

  [data-popper-placement^="left"] & {
    right: 0px;
  }

  [data-popper-placement^="top"] & {
    bottom: 0px;
  }

  [data-popper-placement^="bottom"] & {
    top: 0px;
  }
`;

const TooltipBody = styled.span`
  ${renderPopperStyles}

  pointer-events: none;
  max-width: ${(p) => p.maxWidth}rem;
  background: ${getBackground};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.16));
`;

export const Tooltip = ({
  id,
  dataTestId = id,
  placement = "top",
  theme = "dark",
  text = "",
  ariaLabel,
  maxWidth = 17.5,
  show: override,
  children
}) => {
  const [hovering, setHovering] = useState(false);
  const [focussed, setFocussed] = useState(false);
  const onMouseEnterHandler = useCallback(() => setHovering(true), []);
  const onMouseLeaveHandler = useCallback(() => setHovering(false), []);
  const onFocusHandler = useCallback(() => setFocussed(true), []);
  const onBlurHandler = useCallback(() => setFocussed(false), []);
  const [bodyEl, setBodyEl] = useState(null);
  const [arrowEl, setArrowEl] = useState(null);
  const [targetEl, setTargetEl] = useState(null);
  const showing = override || hovering || focussed;
  const isDark = theme === "dark";
  const { styles, attributes } = usePopper(targetEl, bodyEl, {
    placement,
    strategy: "fixed",
    modifiers: [
      {
        name: "arrow",
        options: { element: arrowEl, padding: 20 }
      },
      {
        name: "flip",
        enabled: true
      },
      {
        name: "offset",
        options: { offset: [0, 8] }
      }
    ]
  });

  return (
    <>
      <TooltipTarget
        id={`${id}-target`}
        data-testid={`${dataTestId}-target`}
        ref={setTargetEl}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        aria-describedby={id}
        aria-expanded={showing}
        aria-label={ariaLabel}
      >
        {children}
      </TooltipTarget>
      {showing && (
        <TooltipBody
          id={id}
          data-testid={dataTestId}
          ref={setBodyEl}
          maxWidth={maxWidth}
          popperStyle={styles.popper}
          {...attributes.popper}
          isDark={isDark}
          role="tooltip"
        >
          <Text.Footnote
            tag="span"
            uiColor={isDark ? "neutral.100" : "neutral.700"}
            uiTextAlign="center"
            style={{ display: "block", lineHeight: `1rem` }}
          >
            {text}
          </Text.Footnote>
          <TooltipArrow
            ref={setArrowEl}
            popperStyle={styles.arrow}
            isDark={isDark}
          />
        </TooltipBody>
      )}
    </>
  );
};

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  ariaLabel: PropTypes.string,
  maxWidth: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  theme: PropTypes.oneOf(["dark", "light"]),
  show: PropTypes.bool,
  children: PropTypes.node.isRequired
};

import * as React from "react";
import { colors } from "./colors";

const gradients = {
  ...colors.gradient,
  none: { start: "", end: "" }
};

const LinearGradient = ({ gradient, iconid }) => {
  return (
    <linearGradient
      id={`${iconid}-linearColor`}
      x1="0%"
      y1="60%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor={gradients[gradient].start} />
      <stop offset="110%" stopColor={gradients[gradient].end} />
    </linearGradient>
  );
};

const ActionChevronDown = (props) => {
  return (
    <svg
      {...props}
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chevron Down</title>
      {props.gradient && (
        <LinearGradient gradient={props.gradient} iconid={props.iconid} />
      )}
      <path
        d="M46.1346 62.2043L24.7727 40.204C23.7424 39.1429 23.7424 37.4227 24.7727 36.3617L27.2642 33.7958C28.2927 32.7365 29.9596 32.7345 30.9906 33.7912L48.0001 51.2269L65.0094 33.7912C66.0403 32.7345 67.7073 32.7365 68.7358 33.7958L71.2273 36.3617C72.2576 37.4228 72.2576 39.143 71.2273 40.204L49.8655 62.2043C48.8352 63.2652 47.1649 63.2652 46.1346 62.2043Z"
        fill="black"
      />
    </svg>
  );
};

const ActionChevronUp = (props) => {
  return (
    <svg
      {...props}
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chevron Up</title>
      {props.gradient && (
        <LinearGradient gradient={props.gradient} iconid={props.iconid} />
      )}
      <path
        d="M49.8654 33.7957L71.2273 55.796C72.2576 56.8571 72.2576 58.5773 71.2273 59.6383L68.7358 62.2042C67.7073 63.2635 66.0403 63.2655 65.0094 62.2088L47.9999 44.7731L30.9906 62.2088C29.9597 63.2655 28.2927 63.2635 27.2642 62.2042L24.7727 59.6383C23.7424 58.5772 23.7424 56.857 24.7727 55.796L46.1345 33.7957C47.1648 32.7348 48.8351 32.7348 49.8654 33.7957Z"
        fill="black"
      />
    </svg>
  );
};

const Icons = { ActionChevronDown, ActionChevronUp };

export { Icons };

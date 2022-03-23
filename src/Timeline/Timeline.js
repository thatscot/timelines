import React from "react";
import { ContentFlow } from "../Spectrum";
import { Group } from "./components";

const Timeline = ({ children }) => {
  return <ContentFlow>{children}</ContentFlow>;
};

Timeline.Group = Group;

export { Timeline };

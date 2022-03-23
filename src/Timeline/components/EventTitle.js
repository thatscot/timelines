import styled from "@emotion/styled/macro";
import React from "react";
import { Text } from "../../Spectrum";

const TitleContainer = styled.div`
  display: grid;
  line-height: 1.5rem;
`;

const SubheadText = styled(Text.Body)`
  font-size: 0.9rem;
  margin-bottom: ${({ isMajor }) => !isMajor && "1rem"};
`;

const EventSubhead = ({ children, isMajor, ...props }) => {
  return (
    <SubheadText uiWeight="standard" tag="i" uiColor="neutral.700" {...props}>
      {children}
    </SubheadText>
  );
};

const EventTitle = ({ children, title, subhead, isMajor, ...props }) => {
  const TitleComponent = isMajor ? Text.Subhead : Text.Footnote;
  return (
    <TitleContainer isMajor={isMajor}>
      {title && (
        <TitleComponent
          tag="span"
          uiWeight={isMajor ? "heavy" : "standard"}
          {...props}
        >
          {title}
        </TitleComponent>
      )}
      {subhead && <EventSubhead isMajor={isMajor}>{subhead}</EventSubhead>}
    </TitleContainer>
  );
};

export { EventTitle };

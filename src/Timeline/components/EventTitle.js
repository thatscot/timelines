import styled from "@emotion/styled/macro";
import React from "react";
import { Text, Icon } from "../../Spectrum";

const EventTitleContainer = styled.div`
  display: grid;
  line-height: 1.5rem;
`;

const SubheadText = styled(Text.Body)`
  font-size: 0.9rem;
  margin-bottom: ${({ isMajor }) => (!isMajor ? "1rem" : "0")};
`;

const MajorMainTitleText = styled(Text.Subhead)`
  margin-bottom: ${({ subhead }) => (!subhead ? "1rem" : "0")};
`;

const EventSubhead = ({ children, isMajor, ...props }) => (
  <SubheadText uiWeight="standard" tag="i" uiColor="neutral.700" {...props}>
    {children}
  </SubheadText>
);

const StyledTitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-column-gap: 0.3em;
`;

const EventTitle = ({
  children,
  title,
  subhead,
  isMajor,
  isInFlight,
  isExpectedCompletionEvent,
  ...props
}) => {
  const TitleComponent = isMajor ? MajorMainTitleText : Text.Footnote;

  return (
    <EventTitleContainer isMajor={isMajor}>
      {title && (
        <StyledTitleContainer>
          {isExpectedCompletionEvent && (
            <Icon iconName="HourGlass" uiSize="micro" uiColor="neutral.700" />
          )}
          <TitleComponent
            subhead={subhead}
            tag="span"
            uiWeight={isMajor ? "heavy" : "standard"}
            {...props}
          >
            {title}
          </TitleComponent>
        </StyledTitleContainer>
      )}
      {subhead && <EventSubhead isMajor={isMajor}>{subhead}</EventSubhead>}
    </EventTitleContainer>
  );
};

export { EventTitle };

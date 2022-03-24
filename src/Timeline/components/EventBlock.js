import React from "react";
import styled from "@emotion/styled";
import { Text } from "../../Spectrum";
import { Marker } from "./Marker";
import { TimelineDivider, DetailsDivider } from "./Dividers";
import { EventTitle } from "./EventTitle";

const StyledSubheading = styled(Text.Subhead)`
  justify-self: end;
`;

const Date = ({ children }) => (
  <StyledSubheading tag="span" uiWeight="heavy" uiColor="primary.brand.500">
    {children}
  </StyledSubheading>
);

const Time = ({ children, ...props }) => (
  <Text.Body tag="span" uiColor="neutral.600" {...props}>
    {children}
  </Text.Body>
);

const Details = ({ children, ...props }) => (
  <Text.Body tag="span" {...props}>
    {children}
  </Text.Body>
);

const Event = styled.span`
  grid-column-end: span 2;
`;

const StyledEventBlock = styled.div`
  display: grid;
  /* grid-template-columns: 0.5fr 0.5fr 1fr 1fr; */
  grid-template-columns: 4rem 2rem 3rem 6rem;
  /* grid-template-rows: auto; */
  place-items: start;
  margin: 0;
  align-items: start;
`;

const EventBlock = ({
  date,
  time,
  description,
  showMinorEventUI,
  isMajor,
  isFirst,
  isLast,
  isExpectedCompletionEvent,
  eventTitle
}) => {
  return (
    <>
      <Date>{date}</Date>
      <TimelineDivider isFirst={isFirst} isLast={isLast}>
        {description && (
          <Marker
            showMinorEventUI={!showMinorEventUI}
            isMajor={isMajor}
            isFirst={isFirst}
          />
        )}
      </TimelineDivider>
      <Time>{time}</Time>
      <EventTitle
        isMajor={isMajor}
        title={eventTitle?.title}
        subhead={eventTitle?.subhead}
        isExpectedCompletionEvent={isExpectedCompletionEvent}
      />
    </>
  );
};

export { EventBlock };

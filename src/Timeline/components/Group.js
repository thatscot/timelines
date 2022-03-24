import React, { useState } from "react";
import { parseISO, isSameDay, isValid, format } from "date-fns";
import styled from "@emotion/styled";
import { EventBlock } from "./EventBlock";
import { EventsBlock } from "./EventsBlock";
import { DetailsBlock } from "./DetailsBlock";
import { ExpandButtonBlock } from "./ExpandButtonBlock";
import { TimelineDivider } from "./Dividers";

const formatDate = (timestamp, isMajor) =>
  isValid(parseISO(timestamp)) &&
  format(parseISO(timestamp), isMajor ? "d MMM yyyy" : "d MMM");

const formatTime = (timestamp) =>
  isValid(parseISO(timestamp)) && format(parseISO(timestamp), "H:mm");

const last = (array) => array[array.length - 1];

const mapDateAndTime = (event, idx, events, prevEvents) => {
  const mappedEvent = { ...event, time: formatTime(event.timestamp) };
  const isMajor = idx === events.length - 1;
  const date = formatDate(event.timestamp, isMajor);

  // Get previous date
  const prevDate = !!prevEvents && last(prevEvents.map(mapDateAndTime))?.date;
  mappedEvent.isMajor = isMajor;

  if (
    !isSameDay(
      parseISO(event.timestamp),
      parseISO(events[idx + 1]?.timestamp)
    ) &&
    prevDate !== date
  ) {
    mappedEvent.date = date;
  }
  return mappedEvent;
};

const mapStatus = (event, idx, events) => {
  if (idx === events.length - 1) return event;
};

const EventsAndDetailsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f3faff;
  margin: 0;
`;

const BlockBoundary = styled.div`
  border-radius: ${({ top }) => (top ? "1rem 1rem 0 0" : "0 0 1rem 1rem")};
  background: #f3faff;
  height: 1rem;
  margin: 0;
  display: grid;
  grid-template-columns: 14rem;
`;

const mapEventTitle = (event, idx, events) => {
  const { event: eventName, status } = event;
  if (idx === 0 || idx === events.length - 1) {
    return {
      ...event,
      eventTitle: {
        title: status,
        subhead: eventName
      }
    };
  }

  const { event: prevEventName, status: prevStatus } = events[idx - 1] || {};

  let title = "";
  let subhead = "";

  if (status !== prevStatus) {
    if (eventName !== prevEventName) {
      title = status;
      subhead = eventName;
    } else if (eventName === prevEventName) {
      title = status;
    }
  } else {
    subhead = eventName;
  }

  if (title === subhead) {
    subhead = "";
  }

  return {
    ...event,
    eventTitle: {
      title,
      subhead
    }
  };
};

const Group = ({
  events,
  prevEvents,
  details,
  isFirst,
  isLast,
  isFirstGroupMajorOnly
}) => {
  const [expanded, setExpanded] = useState(isFirst);

  const mappedEvents = events
    .map((event, idx, events) => mapDateAndTime(event, idx, events, prevEvents))
    .map(mapEventTitle);

  return (
    <>
      {expanded && (
        <>
          {((isFirstGroupMajorOnly && !isFirst) || !isFirstGroupMajorOnly) && (
            <BlockBoundary top>{!isFirst && <TimelineDivider />}</BlockBoundary>
          )}
          <EventsAndDetailsBlock>
            <EventsBlock isGroup={true} isFirst={isFirst}>
              {[
                ...mappedEvents
                  .slice(0, mappedEvents.length - 1)
                  .map((event, idx) => {
                    return (
                      <EventBlock
                        isFirstGroupMajorOnly={isFirstGroupMajorOnly}
                        {...event}
                        isFirst={isFirst && idx === 0}
                      />
                    );
                  }),
                <EventBlock />
              ]}
            </EventsBlock>

            <DetailsBlock details={details} />
          </EventsAndDetailsBlock>
          {((isFirstGroupMajorOnly && !isFirst) || !isFirstGroupMajorOnly) && (
            <BlockBoundary>
              <TimelineDivider />
            </BlockBoundary>
          )}
        </>
      )}
      {((isFirstGroupMajorOnly && !isFirst) || !isFirstGroupMajorOnly) && (
        <ExpandButtonBlock
          expanded={expanded}
          setExpanded={setExpanded}
          isFirst={isFirst}
        />
      )}
      <EventsBlock>
        <EventBlock
          isFirstGroupMajorOnly={isFirstGroupMajorOnly}
          {...last(mappedEvents)}
          isLast={isLast}
          isFirst={isFirst}
        />
      </EventsBlock>
    </>
  );
};

export { Group };

import React from "react";
import { Timeline } from "./Timeline";
import "./styles.css";

const timeline = [
  {
    events: [
      {
        // timestamp: "2023-01-26T13:46:42.055821Z",
        description: "Aliens stole it 2",
        event: "Aliens stole it 2",
        salesStatus: "FUTURE_SALES_STATUS",
        status: "FUTURE_EVENT_STATUS",
        isExpectedCompletionEvent: true
      }
    ],
    details: []
  },
  {
    events: [
      {
        timestamp: "2022-01-26T13:46:42.055821Z",
        description: "Aliens stole it",
        // description: "Several things happened, and then another thing happened",
        event: "Aliens stole it",
        salesStatus: "ACTIVE",
        status: "PRE-ACTIVE"
      },

      {
        timestamp: "2022-01-25T13:46:42.055821Z",
        description: "Several things happened, and then another thing happened",
        event: "Aliens stole it",
        salesStatus: "ACTIVE",
        status: "PRE-ACTIVE"
      },
      {
        timestamp: "2022-01-25T13:46:42.055821Z",
        description: "Several things happened, and then another thing happened",
        event: "Several things happened, and then another thing happened",
        salesStatus: "ACTIVE",
        status: "DELIVERED"
      },
      {
        timestamp: "2022-01-24T17:12:42.055821Z",
        description: "Order delivered",
        event: "Order delivered",
        descriptionDetail: "14:00 - 16:00",
        salesStatus: "ACTIVE",
        status: "DELIVERED"
      }
    ],
    details: [
      { label: "Address", value: "Sample Value" },
      { label: "Provisioning Method", value: "New phone line installation" },
      { label: "Third thing", value: "Some kind of value" },
      { label: "Third thing", value: "Some kind of value" },
      { label: "Third thing", value: "Some kind of value" },
      { label: "Third thing", value: "Some kind of value" },
      { label: "Third thing", value: "Some kind of value" }
    ]
  },
  {
    events: [
      {
        timestamp: "2022-01-24T13:12:42.055821Z",
        description: "Order delivered again",
        descriptionDetail: "14:00 - 16:00",
        salesStatus: "ACTIVE",
        status: "REDELIVERED"
      } //major
    ],
    details: [{ label: "Address", value: "Pie Island" }]
  },
  {
    events: [
      {
        timestamp: "2022-01-23T17:32:42.055821Z",
        description: "Order stolen by postie",
        event: "Order stolen by postie",
        salesStatus: "PREACTIVE",
        status: "DISPATCHED"
      },
      {
        timestamp: "2022-01-23T16:43:42.055821Z",
        description: "Order dispatched",
        event: "Order dispatched",
        salesStatus: "PREACTIVE",
        status: "DISPATCHED"
      },
      {
        timestamp: "2022-01-23T12:12:42.055821Z",
        description: "Order accepted",
        event: "Order accepted",
        salesStatus: "PREACTIVE",
        status: "AWAITING_DELIVERY"
      }
    ],
    details: [{ label: "Address", value: "The Gutter" }]
  }
]; //

const App = () => {
  //should try to pass this through context instead of drilling
  // will have a go at that on a fork
  const isFirstEventMajorOnly = timeline[0].events.length === 1;
  return (
    <Timeline>
      {timeline.map(({ events, details }, idx) => {
        // should we just expose the EventBlocks to map them here?

        // Add scope for prevEvents
        const prevEvents = idx >= 1 ? timeline[idx - 1].events : [];

        return (
          <Timeline.Group
            isFirstEventMajorOnly={isFirstEventMajorOnly}
            events={events}
            prevEvents={prevEvents}
            details={details}
            isFirst={idx === 0}
            isLast={idx === timeline.length - 1}
          />
        );
      })}
    </Timeline>
  );
};

export default App;

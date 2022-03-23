import React from "react";
import styled from "@emotion/styled";

const StyledEventsBlock = styled.div`
  display: grid;
  width: 55%;
  grid-template-columns: 6rem 2rem 3rem 1fr;
  grid-template-rows: repeat(
    ${({ numberOfRows }) => numberOfRows},
    minmax(3rem, min-content)
  );
  place-items: start;
  margin: 0;
  align-items: flex-start;
`;

const EventsBlock = ({ children, isGroup, isFirst }) => (
  <StyledEventsBlock
    isGroup={isGroup}
    isFirst={isFirst}
    numberOfRows={children.length - 1}
  >
    {children}
  </StyledEventsBlock>
);

export { EventsBlock };

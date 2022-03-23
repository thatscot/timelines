import React from "react";
import styled from "@emotion/styled";
import { Text, Icon } from "../../Spectrum";
import { TimelineDivider } from "./Dividers";

const StyledButtonBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 14rem;
  margin-top: 0;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ isFirst }) => (isFirst ? "0" : "0.5rem")};
  margin-bottom: ${({ isFirst }) => (isFirst ? "1.5rem" : "1rem")};
  place-self: center;
  white-space: nowrap;
  height: 1.5rem;
  border-radius: 1rem;
  border-width: 0;
  background: #f3faff;
  cursor: pointer;
`;

const ExpandButtonBlock = ({ expanded, setExpanded, isFirst }) => {
  return (
    <StyledButtonBlock>
      <TimelineDivider isFirst={!expanded && isFirst}>
        <StyledButton
          isFirst={!expanded && isFirst}
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          <Text.Footnote isUi tag="span" uiColor="primary.brand.700">
            {expanded ? "Show less" : "Show more"}
          </Text.Footnote>
          <Icon
            iconName={expanded ? "ActionChevronDown" : "ActionChevronUp"}
            uiSize="x-small"
            decorative="true"
          />
        </StyledButton>
      </TimelineDivider>
    </StyledButtonBlock>
  );
};

export { ExpandButtonBlock };

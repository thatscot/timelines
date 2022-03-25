import React from "react";
import styled from "@emotion/styled";
import { Text } from "../../Spectrum";
import { Icon } from "../../Spectrum/Icon";
import { Tooltip } from "../../Spectrum/Tooltip";

const DetailsText = styled.span`
  display: flex;
  align-items: center;
`;

const ToolTipWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0 0.5rem;
`;

const Details = ({ children, ...props }) => (
  <Text.Body tag="span" {...props}>
    <DetailsText>{children}</DetailsText>
  </Text.Body>
);

const IconToolTip = ({ iconName, text }) => (
  <ToolTipWrapper>
    <Tooltip id="123" text={text} placement="top">
      <Icon iconName={iconName} uiSize="micro" />
    </Tooltip>
  </ToolTipWrapper>
);

const DetailsWrapper = styled.div`
  display: grid;
  width: 40%;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(auto-fit, 1.25rem); */
  grid-row-gap: 0.5rem;
  border-left: 1px solid #9f9f9f;
  padding-left: 1rem;
`;

const DetailsBlock = ({ details }) => {
  return (
    <DetailsWrapper>
      {/* <DetailsDivider /> */}
      {details.map(({ label, value }, index) => {
        const showToolTip = index === 0;
        return (
          <>
            <Details uiWeight="heavy" uiColor="neutral.700">
              {label && `${label}:`}
            </Details>
            <Details>
              {value}
              {showToolTip && <IconToolTip iconName="Help" text="Test Text" />}
            </Details>
          </>
        );
      })}
    </DetailsWrapper>
  );
};

export { DetailsBlock };

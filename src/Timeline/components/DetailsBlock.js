import React from "react";
import styled from "@emotion/styled";
import { Text } from "../../Spectrum";
import { DetailsDivider } from "./Dividers";

const Details = ({ children, ...props }) => (
  <Text.Body tag="span" {...props}>
    {children}
  </Text.Body>
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
      {details.map(({ label, value }) => (
        <>
          <Details uiWeight="heavy" uiColor="neutral.700">
            {label && `${label}: `}
          </Details>
          <Details>{value}</Details>
        </>
      ))}
    </DetailsWrapper>
  );
};

export { DetailsBlock };

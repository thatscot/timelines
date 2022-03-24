import styled from "@emotion/styled";

const getHeight = (isFirst, isLast, hideMinorEventUI) => {
  if (isFirst && hideMinorEventUI) return "90%";
  if (isLast) return "20%";
  return "100%";
};

const getAlignment = (isFirst, isLast) => {
  if (isFirst) return "end";
  if (isLast) return "start";
  else return "center";
};

const TimelineDivider = styled.div`
  height: ${({ isFirst, isLast, hideMinorEventUI }) =>
    getHeight(isFirst, isLast, hideMinorEventUI)};
  width: 1px;
  align-self: ${({ isFirst, isLast }) => getAlignment(isFirst, isLast)};
  justify-self: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  background-color: #3581c6;
`;

const DetailsDivider = styled.div`
  display: inline-flex;
  width: 1px;
  align-self: ${({ isFirst, isLast }) => getAlignment(isFirst, isLast)};
  background-color: #9f9f9f;
  justify-content: center;
`;

export { TimelineDivider, DetailsDivider };

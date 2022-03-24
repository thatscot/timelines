import styled from "@emotion/styled";

const getTranslateYValue = (isMajor, isFirstGroupMajorOnly, isFirst) => {
  if (!isMajor && !isFirst) return "translateY(160%)";
  if (isMajor && !isFirst) return "translateY(7px)";

  return "none";
};

const Marker = styled.div`
  height: ${({ isMajor }) => (isMajor ? "10px" : "5px")};
  width: ${({ isMajor }) => (isMajor ? "10px" : "5px")};
  background-color: #bbb;
  border-radius: 50%;
  align-self: center;
  background-color: #3581c6;
  transform: ${({ isMajor, isFirstGroupMajorOnly, isFirst }) =>
    getTranslateYValue(isMajor, isFirstGroupMajorOnly, isFirst)};
`;

export { Marker };

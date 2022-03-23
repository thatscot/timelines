import styled from "@emotion/styled";

const Marker = styled.div`
  height: ${({ isMajor }) => (isMajor ? "10px" : "5px")};
  width: ${({ isMajor }) => (isMajor ? "10px" : "5px")};
  transform: ${({ isMajor }) => (isMajor ? "translateY(5px)" : "none")};
  background-color: #bbb;
  border-radius: 50%;
  align-self: center;
  background-color: #3581c6;
  transform: ${({ isMajor, isFirst }) =>
    !isMajor && !isFirst && "translateY(180%)"};
`;

export { Marker };

import styled from '@emotion/styled';

const getTranslateYValue = (isMajor, isFirstEventMajorOnly, isFirst) => {
  console.log(isMajor, isFirstEventMajorOnly, isFirst);

  if (isFirstEventMajorOnly && isFirst) return 'translateY(0px)';
  if (!isMajor && !isFirst) return 'translateY(160%)';
  if (isMajor) return 'translateY(7px)';

  return 'none';
};

const Marker = styled.div`
  height: ${({ isMajor }) => (isMajor ? '10px' : '5px')};
  width: ${({ isMajor }) => (isMajor ? '10px' : '5px')};
  background-color: #bbb;
  border-radius: 50%;
  align-self: center;
  background-color: #3581c6;
  transform: ${({ isMajor, isFirstEventMajorOnly, isFirst }) =>
    getTranslateYValue(isMajor, isFirstEventMajorOnly, isFirst)};
`;

export { Marker };

import styled from 'styled-components';
export const FeedbackSection = styled.section`
  width: 50%;
  padding: 20px;
  border: 2px solid ${({theme})=>theme.colors.grey};
  border-radius: 4px;

  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const Caption = styled.h2`
  display: block;
  margin-bottom: ${({theme})=>theme.spacing(5)};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

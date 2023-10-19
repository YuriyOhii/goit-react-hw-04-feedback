import styled from 'styled-components';
export const Title = styled.h2`
  margin-bottom: ${({theme})=>theme.spacing(5)};
  text-align: center;
`;

export const StatBox = styled.ul`
  display: flex;
  gap: ${({theme})=>theme.spacing(3)};
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme})=>theme.spacing(1)};

  font-size: 20px;
  font-weight: 700;
`;

export const Tablo = styled.span`
  width: 70px;

  font-weight: 700;
  font-size: 30px;
  line-height: 2.5;
  text-align: center;
  border: none;
  border-radius: 4px;

  background-color: ${({theme})=>theme.colors.blue};
  color: ${({theme})=>theme.colors.white};
`;

export const TotalText = styled.p`
  margin-top: ${({theme})=>theme.spacing(3)};
  margin-bottom: ${({theme})=>theme.spacing(3)};
  margin-left: ${({theme})=>theme.spacing(5)};
  font-size: 20px;
  color: ${({theme})=>theme.colors.grey};
`;

export const TotalVal = styled.span`
  color: ${({theme})=>theme.colors.red};
`;

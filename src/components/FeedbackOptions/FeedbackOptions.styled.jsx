import styled from 'styled-components';
export const ControlsBox = styled.ul`
  margin-bottom: ${({theme})=>theme.spacing(5)};
  display: flex;
  gap: ${({theme})=>theme.spacing(3)};
  justify-content: center;
  list-style: none;
`;

export const BtnFeedback = styled.button`
  width: 70px;
  height: 20px;

  font-weight: 700;
  font-family: inherit;

  border: none;
  border-radius: 4px;

  background-color: ${({theme})=>theme.colors.blue};
  color: ${({theme})=>theme.colors.white};

  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;
  :active {
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }
`;

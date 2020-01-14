import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 2px;
  padding: 0.7rem 2.5rem;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #007bff;
  background: #fff;
  border: 4px solid #007bff;
  


  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;

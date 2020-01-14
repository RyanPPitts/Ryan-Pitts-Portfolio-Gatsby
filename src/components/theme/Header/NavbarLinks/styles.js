import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #444452;
	text-decoration: none;
	font-size: 20px;
	line-height: 60px;
	font-weight: 300;
  }

  a:hover {
	color: #007BFF;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

import styled from 'styled-components'

export const StyledForm = styled.form`
	padding: 4rem;
	gap: 3.2rem;
	display: grid;

	border-radius: .6rem;
	background-color: ${(props) => props.theme['base-card']};
`
export const StyledFormHeader = styled.div`
	column-gap: .8rem;
	display: grid;
	grid-template: auto 1fr / auto 1fr;

	> svg {
		grid-row: span 2;
	}
`

export const StyledInputs = styled.div`
  gap: 1.6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > div:nth-child(1) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  > div:nth-child(2) {
    grid-column: 1 / span 3;
    grid-row: 2 / span 1;
  }

  > div:nth-child(3) {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }

  > div:nth-child(4) {
    grid-column: 2 / span 2;
    grid-row: 3 / span 1;
  }

  > div:nth-child(5) {
    grid-column: 1 / span 1;
    grid-row: 4 / span 1;
  }

  > div:nth-child(6) {
    grid-column: 2 / span 1;
    grid-row: 4 / span 1;
  }

  > div:nth-child(7) {
    grid-column: 3 / span 1;
    grid-row: 4 / span 1;
  }
`;


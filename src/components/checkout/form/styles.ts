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
	grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;

	div:nth-child(2) {
		grid-column: span 4;
	}

	div:nth-child(4) {
		grid-column: span 3;
	}

	div:nth-child(6) {
		grid-column: span 1;
	}
`

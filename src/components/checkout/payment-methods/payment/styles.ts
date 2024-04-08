import styled from 'styled-components'

export const StyledPayment = styled.section`
	padding: 4rem;
	gap: 3.2rem;
	display: grid;

	border-radius: .6rem;
	background-color: ${(props) => props.theme['base-card']};
`

export const StyledPaymentHeader = styled.div`
	column-gap: .8rem;
	display: grid;
	grid-template: auto 1fr / auto 1fr;

	> svg {
		grid-row: span 2;
	}

	h3 {
		color: ${(props) => props.theme['base-subtitle']};
	}

	p {
		color: ${(props) => props.theme['base-text']};
	}
`

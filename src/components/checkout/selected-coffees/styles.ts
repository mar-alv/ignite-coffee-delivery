import { styled } from 'styled-components'

export const StyledSelectedCoffees = styled.section`
	max-width: 44.8rem;
	gap: 1.2rem;
	display: grid;

	h2 {
		color: ${(props) => props.theme['base-subtitle']};
	}
`

export const StyledCoffees = styled.section`
	padding: 4rem;
	gap: 1.2rem;
	display: grid;

	border-radius: .6rem;
	border-top-right-radius: 4.4rem;
	border-bottom-left-radius: 4.4rem;
	background-color: ${(props) => props.theme['base-card']};

	h2 {
		color: ${(props) => props.theme['base-subtitle']};
	}
`

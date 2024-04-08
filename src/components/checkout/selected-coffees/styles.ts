import { styled } from 'styled-components'

export const StyledSelectedCoffees = styled.section`
	gap: 1.2rem;
	display: grid;

	h2 {
		color: ${(props) => props.theme['base-subtitle']};
	}
`
export const StyledContainer = styled.section`
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

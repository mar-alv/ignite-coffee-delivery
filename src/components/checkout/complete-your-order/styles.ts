import styled from 'styled-components'

export const StyledCompleteYourOrder = styled.section`
	max-width: 64rem;
	gap: 1.2rem;
	display: grid;

	h2 {
		color: ${(props) => props.theme['base-subtitle']};
	}
`

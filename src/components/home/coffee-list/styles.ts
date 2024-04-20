import styled from 'styled-components'

export const StyledCoffeeList = styled.section`
	max-width: 112rem;
	width: 100%;
	margin-inline: auto;
	margin-top: 12.8rem;
`

export const StyledTitle = styled.h2`
	color: ${(props) => props.theme['base-subtitle']};
`

export const StyledCoffees = styled.section`
	margin-top: 3.2rem;
	gap: 3.2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25.6rem, 1fr));
`

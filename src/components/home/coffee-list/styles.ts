import styled from 'styled-components'

export const OurCoffees = styled.section`
	max-width: 106rem;
	width: 100%;
	margin-inline: auto;
	margin-top: 3.2rem;
`

export const Title = styled.h2`
	color: ${(props) => props.theme['base-subtitle']};
`

export const Coffees = styled.section`
	margin-top: 3.2rem;
	gap: 3.2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25.6rem, 1fr));
`

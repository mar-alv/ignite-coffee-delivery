import styled from 'styled-components'

export const StyledPage = styled.main`
	margin-top: 8rem;
	max-width: 112rem;
	width: 100%;
	margin-inline: auto;
`

export const StyledTitle = styled.h1`
	color: ${(props) => props.theme['yellow-dark']};
`

export const StyledSubTitle = styled.p`
	color: ${(props) => props.theme['base-subtitle']};
`

export const StyledDelivery = styled.section`
	width: 100%;
	margin-top: 4rem;
	gap: 16rem;
	display: flex;
	justify-content: space-between;
`

export const StyledDeliveryInfo = styled.div`
	padding: 4rem;
	gap: 3.2rem;
	display: grid;

	border-radius: .6rem;
	border-top-right-radius: 3.6rem;
	border-bottom-left-radius: 3.6rem;

	background-color: ${(props) => props.theme['background']};
`

export const StyledBorder = styled.div`
	height: fit-content;
	padding: .1rem;

	border-radius: .6rem;
	border-top-right-radius: 3.6rem;
	border-bottom-left-radius: 3.6rem;

  background: linear-gradient(to right, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']});
`

export const StyledInfo = styled.div`
	column-gap: 1.2rem;
	display: grid;
	grid-template: auto auto / auto auto;
	align-items: center;
	justify-content: start;

	color: ${(props) => props.theme['base-text']};

	svg {
		padding: .8rem;
		grid-row: span 2;
		border-radius: 50%;
	}
`

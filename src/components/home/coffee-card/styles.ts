import styled from 'styled-components'

export const StyledCard = styled.article`
	padding: 2rem;
	display: grid;
	justify-items: center;

	border-radius: .6rem;
	border-top-right-radius: 3.6rem;
	border-bottom-left-radius: 3.6rem;
	text-align: center;
	background-color: ${(props) => props.theme['base-card']};
`

export const StyledImage = styled.img`
	width: 12rem;
	height: 12rem;
	margin-top: -4.2rem;
`

export const StyledTags = styled.div`
	margin-top: 1.2rem;
	gap: .4rem;
	display: flex;
`

export const StyledTag = styled.span`
	padding: .4rem .8rem;

	border-radius: 3rem;
	color: ${(props) => props.theme['yellow-dark']};
	background-color: ${(props) => props.theme['yellow-light']};
`

export const StyledName = styled.h3`
	margin-top: 1.6rem;

	color: ${(props) => props.theme['base-subtitle']};
`

export const StyledDescription = styled.h3`
	margin-top: .8rem;

	color: ${(props) => props.theme['base-label']};
`

export const StyledFooter = styled.div`
	margin-top: 3.2rem;
	gap: .8rem;
	display: grid;
	grid-template-columns: 1fr auto auto;
	align-items: center;
`

export const StyledPrice = styled.span`
	gap: .4rem;
	display: flex;
	align-items: baseline;
`

export const StyledButton = styled.button`
	padding: .8rem;
	display: grid;
	place-items: center;

	border-radius: 0.6rem;
	background-color: ${(props) => props.theme['purple-dark']};
`

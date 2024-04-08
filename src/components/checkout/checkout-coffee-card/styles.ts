import styled from 'styled-components'

export const StyledCard = styled.article`
	gap: 2rem;
	display: grid;
	grid-template-columns: auto 1fr auto;
`

export const StyledImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`

export const StyledNameAndButtons = styled.div`
	gap: .8rem;
	display: grid;
`

export const StyledButtons = styled.div`
	gap: .8rem;
	display: flex;
`

export const StyledPrice = styled.p`
	color: ${(props) => props.theme['base-text']};
`

export const StyledSeparator = styled.hr`
	width: 100%;
	height: .2rem;
	margin-block: 2.4rem;

	border: none;
	background-color: ${(props) => props.theme['base-button']};
`

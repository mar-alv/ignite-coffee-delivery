import styled from 'styled-components'

export const StyledButton = styled.button`
	padding: .8rem;
	gap: .4rem;
	display: flex;
	align-items: center;

	border-radius: .6rem;
	color: ${(props) => props.theme['base-text']};
	background-color: ${(props) => props.theme['base-button']};
`

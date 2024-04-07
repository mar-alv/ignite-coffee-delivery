import styled from 'styled-components'

export const StyledButtons = styled.div`
	padding: .8rem;
	gap: .4rem;
	display: flex;
	align-items: center;

	border-radius: .6rem;
	background-color: ${(props) => props.theme['base-button']};
`

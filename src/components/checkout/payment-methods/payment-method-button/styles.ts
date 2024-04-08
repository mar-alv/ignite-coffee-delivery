import styled from 'styled-components'

export const StyledButton = styled.button`
	padding: 1.6rem;
	gap: 1.2rem;
	display: flex;
	align-items: center;

	border-radius: .6rem;
	color: ${(props) => props.theme['base-text']};
	background-color: ${(props) => props.theme['base-button']};

	&:not(.--selected):hover {
		color: ${(props) => props.theme['base-subtitle']};
		background-color: ${(props) => props.theme['base-hover']};
	}

	&.--selected {
		cursor: initial;
		border: .1rem solid ${(props) => props.theme['purple']};
		background-color: ${(props) => props.theme['purple-light']};
	}
`

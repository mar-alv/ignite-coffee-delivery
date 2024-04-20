import styled from 'styled-components'

export const StyledInputWrapper = styled.div`
	padding: 1.2rem;
	display: grid;
	grid-template-columns: 1fr auto;

	border: .1rem solid ${(props) => props.theme['base-button']};
	border-radius: .4rem;
	background-color: ${(props) => props.theme['base-input']};

	&:focus-within {
		border-color: ${(props) => props.theme['yellow-dark']};
	}
`

export const StyledInput = styled.input`
	width: 100%;

	color: ${(props) => props.theme['base-text']};
	
	appearance: textfield;
	-moz-appearance: textfield;

	&::placeholder {
		color: ${(props) => props.theme['base-label']};
	}

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
  	-webkit-appearance: none;
	}
`

export const StyledOptional = styled.span`
	color: ${(props) => props.theme['base-label']};
`

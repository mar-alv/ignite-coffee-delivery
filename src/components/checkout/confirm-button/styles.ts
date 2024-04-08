import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledConfirmButton = styled(Link)`
	margin-top: 2.4rem;
	padding: 1.2rem;

	cursor: pointer;
	border-radius: .6rem;
	text-align: center;
	color: ${(props) => props.theme['base-white']};
	background-color: ${(props) => props.theme['yellow']};

	&:hover {
		background-color: ${(props) => props.theme['yellow-dark']};
	}
`

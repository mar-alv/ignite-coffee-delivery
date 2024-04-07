import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
	gap: 1.2rem;
	display: grid;
	grid-template-columns: 1fr auto auto;
`

export const Location = styled.div`
	gap: .4rem;
	display: flex;
	align-items: center;

	padding: .8rem;
	border-radius: .8rem;
	color: ${(props) => props.theme['purple-dark']};
	background-color: ${(props) => props.theme['purple-light']};
`

export const CartButton = styled(Link)`
	padding: .8rem;
	display: grid;
	place-items: center;
	position: relative;

	border-radius: 0.6rem;
	background-color: ${(props) => props.theme['yellow-light']};
`

export const CoffeeCount = styled.sup`
	padding: .2rem .4rem;
	top: -.8rem;
	right: -.8rem;
	position: absolute;

	border-radius: 50%;
	font-weight: bold;
	color: ${(props) => props.theme['base-white']};
	background-color: ${(props) => props.theme['yellow-dark']};
`
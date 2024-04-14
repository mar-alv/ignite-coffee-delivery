import styled from 'styled-components'

export const StyledPaymentResume = styled.div`
	gap: 1.6rem;
	display: grid;

	div {
		display: flex;
		justify-content: space-between;
	}
`

export const StyledPaymentItem = styled.div`
	color: ${(props) => props.theme['base-text']};
`

export const StyledPaymentTotal = styled.div`
	p {
		font-weight: bold;
		color: ${(props) => props.theme['base-subtitle']};
	}
`

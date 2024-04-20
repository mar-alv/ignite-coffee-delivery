import styled from 'styled-components'

export const StyledHero = styled.section`
	margin-top: 9.6rem;
	position: relative;

	img {
		width: 47.6rem;
		height: 36rem;
		position: absolute;
		top: 0;
		right: 0;
		z-index: -1;

		justify-self: center;

		@media (width < 1100px) {
			display: none;
		}
	}
`

export const StyledHeroText = styled.div`
	max-width: 58.8rem;
	h1 {
		color: ${(props) => props.theme['base-title']};
	}

	p {
		margin-top: 1.6rem;

		color: ${(props) => props.theme['base-subtitle']};
	}
`

export const StyledBenefits = styled.ul`
	margin-top: 6.4rem;
	column-gap: 4rem;
	row-gap: 2rem;
	display: flex;
	flex-wrap: wrap;
`

export const StyledBenefit = styled.li`
	gap: 1.2rem;
	display: flex;
	align-items: center;

	color: ${(props) => props.theme['base-text']};

	svg {
		padding: .8rem;
		grid-row: span 2;
		border-radius: 50%;
	}
`

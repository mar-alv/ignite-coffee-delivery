import {
	Coffee,
	Package,
	ShoppingCart,
	Timer
} from 'phosphor-react'
import { defaultTheme } from '@styles'
import hero from '../../../assets/hero.png'
import {
	StyledBenefit,
	StyledBenefits,
	StyledHero,
	StyledHeroText
} from './styles'

export function Hero() {
	return (
		<StyledHero>
			<StyledHeroText>
				<h1 className='title-xl'>
					Encontre o café perfeito para qualquer hora do dia
				</h1>

				<p className='text-l-normal'>
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
				</p>

				<StyledBenefits>
					<StyledBenefit>
						<ShoppingCart 
							color={defaultTheme['base-white']}
							size={32}
							style={{
								backgroundColor: defaultTheme['yellow-dark']
							}}
							weight='fill'
						/>

						<span className='text-m-normal'>
							Compra simples e segura
						</span>
					</StyledBenefit>

					<StyledBenefit>
						<Package 
							color={defaultTheme['base-white']}
							size={32}
							style={{
								backgroundColor: defaultTheme['base-text']
							}}
							weight='fill'
						/>

						<span className='text-m-normal'>
							Embalagem mantém o café intacto
						</span>
					</StyledBenefit>

					<StyledBenefit>
						<Timer 
							color={defaultTheme['base-white']}
							size={32}
							style={{
								backgroundColor: defaultTheme.yellow
							}}
							weight='fill'
						/>

						<span className='text-m-normal'>
							Entrega rápida e rastreada
						</span>
					</StyledBenefit>

					<StyledBenefit>
						<Coffee 
							color={defaultTheme['base-white']}
							size={32}
							style={{
								backgroundColor: defaultTheme.purple
							}}
							weight='fill'
						/>

						<span className='text-m-normal'>
							O café chega fresquinho até você
						</span>
					</StyledBenefit>
				</StyledBenefits>
			</StyledHeroText>

			<img
				src={hero}
				alt='Imagem grande introduzindo as qualidades dos serviços prestados pela Coffee Delivery'
			/>
		</StyledHero>
	)
}

import {
	StyledCart,
	StyledCoffeeCount,
	StyledHeader,
	StyledLocation,
	StyledLogo
} from './styles'
import { CoffeeContext } from '@context'
import { defaultTheme } from '@styles'
import logo from '../../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'

export function Header() {
  const { coffees } = useContext(CoffeeContext)

  return(
    <StyledHeader>
      <StyledLogo to='/' data-testid='home-link-button'>
        <img src={logo} alt='Logo pequeno da Coffee Delivery' />
      </StyledLogo>

			<StyledLocation className='text-sm'>
				<MapPin color={defaultTheme.purple} size={22} weight='fill' />
				Porto Alegre, RS
			</StyledLocation>

			<StyledCart to='/checkout' data-testid='checkout-link-button'>
				<ShoppingCart color={defaultTheme['yellow-dark']} size={22} weight='fill' />

				{!!coffees.length && (
					<StyledCoffeeCount className='text-xs'>
						{coffees.length}
					</StyledCoffeeCount>
				)}
			</StyledCart>
    </StyledHeader>
  )
}

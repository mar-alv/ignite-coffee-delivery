import { CartButton, CoffeeCount, Location, StyledHeader } from './styles'
import { CoffeeContext } from '@context'
import { defaultTheme } from '@styles'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'

export function Header() {
  const { coffees } = useContext(CoffeeContext)

  return(
    <StyledHeader>
      <Link to='/'>
        <img src={logo} alt='Logo pequeno da Coffee Delivery' />
      </Link>

			<Location className='text-sm'>
				<MapPin color={defaultTheme.purple} size={22} weight='fill' />
				Porto Alegre, RS
			</Location>

			<CartButton to='/checkout'>
				<ShoppingCart color={defaultTheme['yellow-dark']} size={22} weight='fill' />

				{!!coffees.length && (
					<CoffeeCount className='text-xs'>
						{coffees.length}
					</CoffeeCount>
				)}
			</CartButton>
    </StyledHeader>
  )
}

import { Coffee } from '@interfaces'
import { CoffeeAmountButtons, RemoveCoffeeButton } from '@components'
import { CoffeeContext } from '@context'
import { currencyUtils } from '@utils'
import {
	StyledButtons,
	StyledCard,
	StyledImage,
	StyledNameAndButtons,
	StyledPrice,
	StyledSeparator
} from './styles'
import { useContext } from 'react'

interface Props {
  coffee: Coffee
}

export function CheckoutCoffeeCard({ coffee }: Props) {
  const { id, amount, image, name, price } = coffee

  const coffeePrice = currencyUtils.toBrazillianCurrency(price)

  const { decreaseAmountInCart, increaseAmountInCart } = useContext(CoffeeContext)

  function handleDecreaseAmountInCart() {
    decreaseAmountInCart(id)
  }

  function handleIncreaseAmountInCart() {
    increaseAmountInCart(id)
  }

  return (
		<>
			<StyledCard>
				<StyledImage
					src={image}
					alt={`Imagem ilustrativa da bebida ${name.toLocaleLowerCase()}`}
				/>
				<StyledNameAndButtons>
					<h4 className='text-m-normal'>
						{name}
					</h4>
					<StyledButtons>
						<CoffeeAmountButtons
							amount={amount ?? 1}
							onDecreaseAmount={handleDecreaseAmountInCart}
							onIncreaseAmount={handleIncreaseAmountInCart}
						/>
						<RemoveCoffeeButton coffeeId={id} />
					</StyledButtons>
				</StyledNameAndButtons>
				<StyledPrice className='text-m-bold'>
					{coffeePrice}
				</StyledPrice>
			</StyledCard>
			<StyledSeparator />
		</>
  )
}

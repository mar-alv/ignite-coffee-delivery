import { Coffee } from '@interfaces'
import { CoffeeAmountButtons } from '@components'
import { CoffeeContext } from '@context'
import { defaultTheme } from '@styles'
import { ShoppingCart } from 'phosphor-react'
import {
	StyledButton,
	StyledCard,
	StyledDescription,
	StyledFooter,
	StyledImage,
	StyledName,
	StyledPrice,
	StyledTag,
	StyledTags
} from './styles'
import { useContext, useState } from 'react'

interface Props {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: Props) {
  const { name, tags, image, price, description } = coffee

  const [amount, setAmount] = useState(1)

  const { addToCart } = useContext(CoffeeContext)

  const coffeePrice = price.toFixed(2).toString().replace('.', ',')

  function handleAddToCart() {
    addToCart({ ...coffee, amount })
  }

  function handleDecreaseAmount() {
    if (amount > 1)
      setAmount(amount - 1)
  }

  function handleIncreaseAmount() {
    setAmount(amount + 1)
  }

  return (
    <StyledCard>
      <StyledImage src={image} alt={`Imagem ilustrativa da bebida ${name.toLocaleLowerCase()}`} />

      <StyledTags>
        {tags.map(tag =>
          <StyledTag key={tag.id} className='tag'>
            {tag.description}
          </StyledTag>
        )}
      </StyledTags>

      <StyledName className='title-s'>
        {name}
      </StyledName>

      <StyledDescription className='text-s'>
        {description}
      </StyledDescription>

      <StyledFooter>
        <StyledPrice className='text-baseText'>
          <sub className='text-s'>
            R$
          </sub>
          <span className='title-m'>
            {coffeePrice}
          </span>
        </StyledPrice>
        <CoffeeAmountButtons
          amount={amount}
          onDecreaseAmount={handleDecreaseAmount}
          onIncreaseAmount={handleIncreaseAmount}
        />
        <StyledButton onClick={handleAddToCart} data-testid='add-coffee-button'>
          <ShoppingCart color={defaultTheme['base-card']} size={22} weight='fill' />
        </StyledButton>
      </StyledFooter>
    </StyledCard>
  )
}

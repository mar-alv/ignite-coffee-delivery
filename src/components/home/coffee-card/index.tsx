import { Card, CardFooter, CartButton, Description, Image, Name, Price, Tag, Tags } from './styles'
import { Coffee } from '@interfaces'
import { CoffeeAmountButtons } from '@components'
import { CoffeeContext } from '@context'
import { defaultTheme } from '@styles'
import { ShoppingCart } from 'phosphor-react'
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
    <Card>
      <Image src={image} alt={`Imagem ilustrativa da bebida ${name.toLocaleLowerCase()}`} />

      <Tags>
        {tags.map(tag =>
          <Tag key={tag.id} className='tag'>
            {tag.description}
          </Tag>
        )}
      </Tags>

      <Name className='title-s'>
        {name}
      </Name>

      <Description className='text-s'>
        {description}
      </Description>

      <CardFooter>
        <Price className='text-baseText'>
          <sub className='text-s'>
            R$
          </sub>
          <span className='title-m'>
            {coffeePrice}
          </span>
        </Price>
        <CoffeeAmountButtons
          amount={amount}
          onDecreaseAmount={handleDecreaseAmount}
          onIncreaseAmount={handleIncreaseAmount}
        />
        <CartButton onClick={handleAddToCart}>
          <ShoppingCart color={defaultTheme['base-card']} size={22} weight='fill' />
        </CartButton>
      </CardFooter>
    </Card>
  )
}

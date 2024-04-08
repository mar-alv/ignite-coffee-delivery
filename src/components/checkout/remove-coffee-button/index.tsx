import { CoffeeContext } from '@context'
import { defaultTheme } from '@styles'
import { StyledButton } from './styles'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'

interface Props {
  coffeeId: number
}

export function RemoveCoffeeButton({ coffeeId }: Props) {
  const { removeFromCart } = useContext(CoffeeContext)

  function handleRemoveFromCart() {
    removeFromCart(coffeeId)
  }

  return (
    <StyledButton onClick={handleRemoveFromCart} className='button-s'>
      <Trash color={defaultTheme.purple} size={16} />
      REMOVER
    </StyledButton>
  )
}

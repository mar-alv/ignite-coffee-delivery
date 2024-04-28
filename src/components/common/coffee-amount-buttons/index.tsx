import { defaultTheme } from '@styles'
import { Minus, Plus } from 'phosphor-react'
import { StyledButtons } from './styles'

interface Props {
  amount: number
  onDecreaseAmount(): void
  onIncreaseAmount(): void
}

export function CoffeeAmountButtons({ amount, onDecreaseAmount, onIncreaseAmount }: Props) {
  return (
    <StyledButtons>
      <button onClick={onDecreaseAmount} data-testid='decrease-amount-button'>
        <Minus color={defaultTheme.purple} size={14} weight='fill' />
      </button>
      <span className='text-m-normal'>
        {amount}
      </span>
      <button onClick={onIncreaseAmount} data-testid='increase-amount-button'>
        <Plus color={defaultTheme.purple} size={14} weight='fill' />
      </button>
    </StyledButtons>
  )
}

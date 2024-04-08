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
      <button onClick={onDecreaseAmount}>
        <Minus color={defaultTheme.purple} size={14} weight='fill' />
      </button>
      <span className='text-m-normal'>
        {amount}
      </span>
      <button onClick={onIncreaseAmount}>
        <Plus color={defaultTheme.purple} size={14} weight='fill' />
      </button>
    </StyledButtons>
  )
}

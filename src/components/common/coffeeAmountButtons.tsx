import { Minus, Plus } from 'phosphor-react'

interface Props {
  amount: number
  onDecreaseAmount(): void
  onIncreaseAmount(): void
}

export function CoffeeAmountButtons({ amount, onDecreaseAmount, onIncreaseAmount }: Props) {
  function handleDecreaseAmount() {
    onDecreaseAmount()
  }

  function handleIncreaseAmount() {
    onIncreaseAmount()
  }

  return (
    <div className='bg-baseButton px-2 gap-1 rounded-md flex items-center'>
      <button onClick={handleDecreaseAmount}>
        <Minus size={14} weight='fill' className='text-purple hover:text-purpleDark focus:text-purpleDark transition duration-500 ease-out' />
      </button>
      <span className='text-baseTitle'>
        {amount}
      </span>
      <button onClick={handleIncreaseAmount}>
        <Plus size={14} weight='fill' className='text-purple hover:text-purpleDark focus:text-purpleDark transition duration-500 ease-out' />
      </button>
    </div>
  )
}

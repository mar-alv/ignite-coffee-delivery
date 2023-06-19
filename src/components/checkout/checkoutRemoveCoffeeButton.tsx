import { CoffeeContext } from '@context'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'

interface Props {
  coffeeId: number
}

export function CheckoutRemoveCoffeeButton({ coffeeId }: Props) {
  const { removeFromCart } = useContext(CoffeeContext)

  function handleRemoveFromCart() {
    removeFromCart(coffeeId)
  }

  return (
    <button onClick={handleRemoveFromCart} className='bg-baseButton rounded-md hover:bg-baseHover focus:bg-baseHover'>
      <span className='font-roboto text-xs text-baseText gap-1 p-2 inline-flex hover:text-baseSubTitle focus:text-baseSubTitle transition duration-500 ease-out'>
        <Trash size={16} className='text-purple hover:text-purpleDark focus:text-purpleDark transition duration-500 ease-out' />
        REMOVER
      </span>
    </button>
  )
}

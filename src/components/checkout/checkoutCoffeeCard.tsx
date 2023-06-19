import { Coffee } from '@interfaces'
import { CoffeeContext } from '@context'
import { CheckoutRemoveCoffeeButton, CoffeeAmountButtons } from '@components'
import { useContext } from 'react'

interface Props {
  coffee: Coffee
}

export function CheckoutCoffeeCard({ coffee }: Props) {
  const { id, amount, image, name, price } = coffee

  const { decreaseAmountInCart, increaseAmountInCart } = useContext(CoffeeContext)

  function handleDecreaseAmountInCart() {
    decreaseAmountInCart(id)
  }

  function handleIncreaseAmountInCart() {
    increaseAmountInCart(id)
  }

  return (
    <div>
      <div className='flex'>
        <div className='flex mr-12'>
          <img
            src={image}
            className='w-16 h-16'
            alt={`Imagem ilustrativa da bebida ${name.toLocaleLowerCase()}`}
          />
          <div className='flex flex-col ml-5'>
            <span className='text-baseSubTitle font-roboto'>
              {name}
            </span>
            <span className='inline-flex gap-2 mt-2'>
              <CoffeeAmountButtons
                amount={amount ?? 1}
                onDecreaseAmount={handleDecreaseAmountInCart}
                onIncreaseAmount={handleIncreaseAmountInCart}
              />
              <CheckoutRemoveCoffeeButton />
            </span>
          </div>
        </div>
        <span className='text-baseText font-bold'>
          R$ {price}
        </span>
      </div>
      <hr className='my-6 text-baseButton border-[1px] border-solid w-full' />
    </div>
  )
}

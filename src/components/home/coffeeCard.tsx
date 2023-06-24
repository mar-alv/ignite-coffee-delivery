import { Coffee } from '@interfaces'
import { CoffeeAmountButtons } from '@components'
import { CoffeeContext } from '@context'
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
    <div className='bg-baseCard w-64 p-5 flex justify-center relative flex-col items-center rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]'>
      <img
        src={image}
        className='absolute -top-5 w-32 h-32'
        alt={`Imagem ilustrativa da bebida ${name.toLocaleLowerCase()}`}
      />
      <div className='flex mt-28 gap-1'>
        {tags.map(tag =>
          <span key={tag.id} className='bg-yellowLight rounded-full p-1 text-yellowDark text-[0.625rem] font-bold font-roboto'>
            {tag.description}
          </span>
        )}
      </div>
      <span className='text-baseSubTitle mt-4 text-xl font-bold font-baloo2'>
        {name}
      </span>
      <span className='text-baseLabel text-center mt-2 text-sm font-baloo2'>
        {description}
      </span>
      <footer className='flex gap-2 mt-8'>
        <span className='text-baseText'>
          <span className='font-roboto text-sm'>
            R$
          </span>
          <span className='font-baloo2 text-2xl font-extrabold'>
            {coffeePrice}
          </span>
        </span>
        <CoffeeAmountButtons
          amount={amount}
          onDecreaseAmount={handleDecreaseAmount}
          onIncreaseAmount={handleIncreaseAmount}
        />
        <button onClick={handleAddToCart} className='focus:outline-none focus:ring-2 focus:ring-black w-[2.375rem] h-[2.375rem] bg-purpleDark flex items-center justify-center rounded-md hover:bg-purple transition duration-500 ease-out'>
          <ShoppingCart size={22} className='text-baseCard' weight='fill' />
        </button>
      </footer>
    </div>
  )
}

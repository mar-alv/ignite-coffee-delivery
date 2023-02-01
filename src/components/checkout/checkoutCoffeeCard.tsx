import { CoffeeAmountButtons } from '@components'
import { Coffee } from '@interfaces'

interface Props {
  coffee: Coffee
}

export function CheckoutCoffeeCard({ coffee }: Props) {
  const { name } = coffee

  return (
    <div className="">
      <header>
        {name}
      </header>
      <CoffeeAmountButtons />
      <hr className='my-6 text-baseButton' />
    </div>
  )
}

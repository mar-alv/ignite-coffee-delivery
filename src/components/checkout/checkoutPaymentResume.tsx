import { CoffeeContext } from '@context'
import { toBrazillianCurrency } from '@utils'
import { useContext } from 'react'

export function CheckoutPaymentResume() {
  const { coffees } = useContext(CoffeeContext)

  const coffeesPrice = coffees.reduce((previousPrice, currentCoffee) =>{
    return previousPrice += (currentCoffee.amount ? currentCoffee.amount : 1) *
                            (currentCoffee.price ? currentCoffee.price : 1)
  },0)

  const feePrice = coffeesPrice * 10 / 100

  const totalPrice = coffeesPrice + feePrice

  return (
    <div className='font-roboto grid gap-3'>
      <div className="flex justify-between text-baseText text-sm">
        <p>Total de itens</p>
        <p>{toBrazillianCurrency(coffeesPrice)}</p>
      </div>
      <div className="flex justify-between text-baseText text-sm">
        <p>Entrega</p>
        <p>{toBrazillianCurrency(feePrice)}</p>
      </div>
      <div className="flex justify-between text-baseSubTitle font-bold text-xl">
        <p>Total</p>
        <p>{toBrazillianCurrency(totalPrice)}</p>
      </div>
    </div>
  )
}

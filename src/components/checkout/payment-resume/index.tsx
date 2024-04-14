import { CoffeeContext } from '@context'
import { currencyUtils } from '@utils'
import { useContext } from 'react'
import { StyledPaymentItem, StyledPaymentResume, StyledPaymentTotal } from './styles'

export function PaymentResume() {
  const { coffees } = useContext(CoffeeContext)

  const coffeesPrice = coffees.reduce((previousPrice, currentCoffee) =>{
    return previousPrice += (currentCoffee.amount ? currentCoffee.amount : 1) *
                            (currentCoffee.price ? currentCoffee.price : 1)
  },0)

  const feePrice = coffeesPrice * 10 / 100

  const totalPrice = coffeesPrice + feePrice

  return (
    <StyledPaymentResume>
      <StyledPaymentItem className='text-s'>
        <p>Total de itens</p>
        <p>{currencyUtils.toBrazillianCurrency(coffeesPrice)}</p>
      </StyledPaymentItem>

      <StyledPaymentItem className='text-s'>
        <p>Entrega</p>
        <p>{currencyUtils.toBrazillianCurrency(feePrice)}</p>
      </StyledPaymentItem>

      <StyledPaymentTotal className='text-l-bold'>
        <p>Total</p>
        <p>{currencyUtils.toBrazillianCurrency(totalPrice)}</p>
      </StyledPaymentTotal>
    </StyledPaymentResume>
  )
}

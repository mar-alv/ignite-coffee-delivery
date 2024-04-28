import { CoffeeContext } from '@context'
import { currencyUtils, paymentUtils } from '@utils'
import { useContext } from 'react'
import { StyledPaymentItem, StyledPaymentResume, StyledPaymentTotal } from './styles'

export function PaymentResume() {
  const { coffees } = useContext(CoffeeContext)

  const coffeesPrice = paymentUtils.getCoffeesPrice(coffees)
  const feePrice = paymentUtils.getFeePrice(coffeesPrice)
  const totalPrice = paymentUtils.getTotalPrice(coffeesPrice, feePrice)

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

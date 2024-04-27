import { PaymentMethodButton } from '@components'
import { CoffeeContext } from '@context'
import { paymentMethods } from '../paymentMethods'
import { StyledPaymentMethods } from './styles'
import { useContext } from 'react'

export function PaymentMethods() {
  const { paymentMethod, choosePaymentMethod } = useContext(CoffeeContext)

  function handleSelect(paymentMethodId: number) {
    const selectedPaymentMethod = paymentMethods.find(method => method.id === paymentMethodId)!

    choosePaymentMethod(selectedPaymentMethod)
  }

  return (
    <StyledPaymentMethods>
      {paymentMethods.map(method =>
        <PaymentMethodButton
          key={method.id}
          isSelected={method.id === paymentMethod?.id}
          onSelect={handleSelect}
          paymentMethod={method}
        />
      )}
    </StyledPaymentMethods>
  )
}

import { CheckoutPaymentMethodButton } from '@components'
import { CoffeeContext } from '@context'
import { PaymentMethod } from '@interfaces'
import paymentMethodsJson from '../../paymentMethods.json'
import { useContext } from 'react'

export function CheckoutPaymentMethodsList() {
  const { paymentMethod, choosePaymentMethod } = useContext(CoffeeContext)

  const paymentMethods: PaymentMethod[] = paymentMethodsJson

  function handleSelect(paymentMethodId: number) {
    const paymentMethodSelected = paymentMethods.find(method => method.id === paymentMethodId)!

    choosePaymentMethod(paymentMethodSelected)
  }

  return (
    <div className='grid grid-cols-3 gap-3 mt-8'>
      {paymentMethods.map(method =>
        <CheckoutPaymentMethodButton
          key={method.id}
          isSelected={method.id === paymentMethod?.id}
          onSelect={handleSelect}
          paymentMethod={method}
        />
      )}
    </div>
  )
}

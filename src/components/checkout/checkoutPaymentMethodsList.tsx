import { useState } from 'react'
import { PaymentMethod } from '@interfaces'
import { CheckoutPaymentMethodButton } from '@components'
import paymentMethodsJson from '../../paymentMethods.json'

export function CheckoutPaymentMethodsList() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(paymentMethodsJson)
  const [paymentMethodSelectedId, setPaymentMethodSelectedId] = useState<number | null | undefined>(null)

  function handleSelect(paymentMethodId: number) {
    const paymentMethodsAfterSelection = paymentMethods.map(paymentMethod => {
      if (paymentMethod.id === paymentMethodId) {
        paymentMethod.isSelected = true
      }

      return paymentMethod
    })

    setPaymentMethodSelectedId(paymentMethodId)
    setPaymentMethods(paymentMethodsAfterSelection)
  }

  return (
    <div className='grid grid-cols-3 gap-3'>
      {paymentMethods.map(paymentMethod =>
        <CheckoutPaymentMethodButton
          key={paymentMethod.id}
          onSelect={handleSelect}
          paymentMethod={paymentMethod}
          isSelected={paymentMethod.id === paymentMethodSelectedId}
        />
      )}
    </div>
  )
}

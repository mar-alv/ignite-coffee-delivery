import clsx from 'clsx'
import { PaymentMethod } from '@interfaces'
import { PaymentMethodsEnum } from '@enums'
import { Bank, CreditCard, Money } from 'phosphor-react'

interface Props {
  isSelected: boolean
  paymentMethod: PaymentMethod
  onSelect(paymentMethodId: number): void
}

export function CheckoutPaymentMethodButton({ onSelect, isSelected, paymentMethod }: Props) {
  const { id, description } = paymentMethod

  function handleSelect() {
    onSelect(id)
  }

  function renderPaymenthMethodButtonIcon(paymentMethodId: number) {
    switch(paymentMethodId) {
    case PaymentMethodsEnum.CREDIT_CARD:
      return <CreditCard size={16} className='text-purple' />
    case PaymentMethodsEnum.DEBIT_CARD:
      return <Bank size={16} className='text-purple' />
    case PaymentMethodsEnum.CASH:
      return <Money size={16} className='text-purple' />
    }
  }

  return (
    <button
      onClick={handleSelect}
      className={clsx('bg-baseButton inline-flex p-4 rounded-md', {
        'bg-purpleLight border-solid border-2 border-purple': isSelected,
        'hover:bg-baseHover hover:text-baseSubTitle focus:bg-baseHover focus:text-baseSubTitle': !isSelected
      })}
    >
      {renderPaymenthMethodButtonIcon(id)}
      <span className='ml-3 font-roboto text-xs text-baseText'>
        {description}
      </span>
    </button>
  )
}

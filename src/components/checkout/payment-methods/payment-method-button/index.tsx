import { Bank, CreditCard, Money } from 'phosphor-react'
import { defaultTheme } from '@styles'
import { PaymentMethod } from '@interfaces'
import { PaymentMethodsEnum } from '@enums'
import { StyledButton } from './styles'

interface Props {
  isSelected: boolean
  paymentMethod: PaymentMethod
  onSelect(paymentMethodId: number): void
}

export function PaymentMethodButton({ onSelect, isSelected, paymentMethod }: Props) {
  const { id, description } = paymentMethod

  function handleSelect() {
    onSelect(id)
  }

  function renderPaymenthMethodButtonIcon(paymentMethodId: number) {
    switch(paymentMethodId) {
			case PaymentMethodsEnum.CREDIT_CARD:
				return <CreditCard color={defaultTheme.purple} size={16} />
			case PaymentMethodsEnum.DEBIT_CARD:
				return <Bank color={defaultTheme.purple} size={16} />
			case PaymentMethodsEnum.CASH:
				return <Money color={defaultTheme.purple} size={16} />
    }
  }

  return (
    <StyledButton onClick={handleSelect} className={`button-s ${isSelected ? '--selected' : ''}`}>
      {renderPaymenthMethodButtonIcon(id)}

      {description}
    </StyledButton>
  )
}

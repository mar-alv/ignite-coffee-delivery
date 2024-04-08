import { CurrencyDollar } from 'phosphor-react'
import { defaultTheme } from '@styles'
import { PaymentMethods } from '@components'
import { StyledPayment, StyledPaymentHeader } from './styles'

export function Payment() {
  return (
    <StyledPayment>
      <StyledPaymentHeader>
        <CurrencyDollar color={defaultTheme.purple} size={22} />

				<h3 className='text-m-normal'>
					Pagamento
				</h3>

				<p className='text-s'>
					O pagamento é feito na entrega. Escolha a forma que deseja pagar
				</p>
      </StyledPaymentHeader>

      <PaymentMethods />
    </StyledPayment>
  )
}

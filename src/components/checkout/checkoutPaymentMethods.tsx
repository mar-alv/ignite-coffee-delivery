import { CurrencyDollar } from 'phosphor-react'
import { CheckoutPaymentMethodsList } from '@components'

export function CheckoutPaymentMethods() {
  return (
    <div className='bg-baseCard p-10 mt-3 rounded-md'>
      <header className='mb-8'>
        <span className='inline-flex'>
          <CurrencyDollar size={22} className='text-purple mr-2' />
          <div>
            <h3 className="font-roboto text-baseSubTitle">
              Pagamento
            </h3>
            <p className="font-roboto text-baseText text-sm">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </span>
      </header>
      <CheckoutPaymentMethodsList />
    </div>
  )
}

import { CheckoutForm, CheckoutPaymentMethods, CheckoutSelectedCoffees } from '@components'

export function Checkout() {
  return (
    <div className='flex mt-10 px-[10%] justify-between'>
      <div>
        <header className='text-baseSubTitle font-bold font-baloo2 text-lg'>
          Complete seu pedido
        </header>
        <CheckoutForm />
        <CheckoutPaymentMethods />
      </div>
      <CheckoutSelectedCoffees />
    </div>
  )
}

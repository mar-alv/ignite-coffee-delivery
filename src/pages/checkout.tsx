import { CheckoutForm, CheckoutPaymentMethods, CheckoutSelectedCoffees } from '@components'

export function Checkout() {
  return (
    <div className='flex mt-10 px-[10%] justify-between'>
      <div>
        <h2 className='text-baseSubTitle font-bold font-baloo2 text-lg'>
          Complete seu pedido
        </h2>
        <CheckoutForm />
        <CheckoutPaymentMethods />
      </div>
      <CheckoutSelectedCoffees />
    </div>
  )
}

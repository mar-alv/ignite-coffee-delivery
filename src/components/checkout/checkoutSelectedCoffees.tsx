import { CoffeeContext } from '@context'
import { CheckoutCoffeeCard, CheckoutConfirmButton, CheckoutPaymentResume } from '@components'
import { useContext } from 'react'

export function CheckoutSelectedCoffees() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <div>
      <h2 className='text-baseSubTitle font-bold font-baloo2 text-lg'>
        Cafés selecionados
      </h2>
      <div className='bg-baseCard p-10 mt-4 rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]'>
        {coffees.map(coffee=> <CheckoutCoffeeCard key={coffee.id} coffee={coffee} />)}
        <CheckoutPaymentResume />
        <CheckoutConfirmButton />
      </div>
    </div>
  )
}

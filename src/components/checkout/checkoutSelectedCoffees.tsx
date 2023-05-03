import { Coffee } from '@interfaces'
import { CheckoutCoffeeCard, CheckoutConfirmButton, CheckoutPaymentResume } from '@components'

export function CheckoutSelectedCoffees() {
  // TODO: Get from context
  const coffees: Coffee[] = [
    {
      id: 0,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
      image: './src/assets/espressoImage.png',
      tags: [
        {
          id: 0,
          description: 'TRADICIONAL'
        }
      ]
    },
    {
      id: 5,
      name: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '9,90',
      image: './src/assets/latteImage.png',
      tags: [
        {
          id: 0,
          description: 'TRADICIONAL'
        },
        {
          'id': 1,
          'description': 'COM LEITE'
        }
      ]
    },
  ]

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

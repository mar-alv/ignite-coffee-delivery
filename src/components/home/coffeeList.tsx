import { Coffee } from '@interfaces'
import { CoffeeCard } from '@components'
import coffeesJson from '../../coffees.json'

export function CoffeeList() {
  const coffees: Coffee[] = coffeesJson

  return (
    <div className='px-[10%]'>
      <h1 className='pt-8 mb-14 font-baloo2 text-[2rem] text-baseSubTitle font-extrabold'>
        Nossos cafés
      </h1>
      <div className='grid grid-cols-4 gap-8'>
        {coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)}
      </div>
    </div>
  )
}

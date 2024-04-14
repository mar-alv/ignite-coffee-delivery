import { Coffee } from '@interfaces'
import { CoffeeCard } from '@components'
import coffeesJson from '../../../coffees.json'
import { Coffees, OurCoffees, Title } from './styles'

export function CoffeeList() {
  const coffees: Coffee[] = coffeesJson

  return (
    <OurCoffees>
      <Title className='title-l'>
        Nossos cafés
      </Title>

      <Coffees>
        {coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)}
      </Coffees>
    </OurCoffees>
  )
}

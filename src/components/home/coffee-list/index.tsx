import { Coffee } from '@interfaces'
import { CoffeeCard } from '@components'
import coffeesJson from '../../../coffees.json'
import { StyledCoffees, StyledCoffeeList, StyledTitle } from './styles'

export function CoffeeList() {
  const coffees: Coffee[] = coffeesJson

  return (
    <StyledCoffeeList>
      <StyledTitle className='title-l'>
        Nossos cafés
      </StyledTitle>

      <StyledCoffees>
        {coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)}
      </StyledCoffees>
    </StyledCoffeeList>
  )
}

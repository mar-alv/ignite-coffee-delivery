import { CoffeeCard } from '@components'
import { coffees } from '../../../coffees'
import { StyledCoffees, StyledCoffeeList, StyledTitle } from './styles'

export function CoffeeList() {
  return (
    <StyledCoffeeList>
      <StyledTitle className='title-l'>
        Nossos cafés
      </StyledTitle>

      <StyledCoffees>
        {coffees.map(i => <CoffeeCard key={i.id} coffee={i} />)}
      </StyledCoffees>
    </StyledCoffeeList>
  )
}

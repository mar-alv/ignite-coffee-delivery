import { CheckoutCoffeeCard, ConfirmButton, PaymentResume } from '@components'
import { CoffeeContext } from '@context'
import { StyledContainer, StyledSelectedCoffees } from './styles'
import { useContext } from 'react'

export function SelectedCoffees() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <StyledSelectedCoffees>
      <h2 className='title-xs'>
        Cafés selecionados
      </h2>

      <StyledContainer>
        {coffees.map(coffee=> <CheckoutCoffeeCard key={coffee.id} coffee={coffee} />)}
        <PaymentResume />
        <ConfirmButton />
      </StyledContainer>
    </StyledSelectedCoffees>
  )
}

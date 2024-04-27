import { CheckoutCoffeeCard, ConfirmButton, PaymentResume } from '@components'
import { CoffeeContext } from '@context'
import { StyledCoffees, StyledSelectedCoffees } from './styles'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function SelectedCoffees() {
  const { coffees } = useContext(CoffeeContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (!coffees.length)
			navigate('/')
	}, [coffees])

  return (
    <StyledSelectedCoffees>
      <h2 className='title-xs'>
        Cafés selecionados
      </h2>

      <StyledCoffees>
        {coffees.map(coffee=> <CheckoutCoffeeCard key={coffee.id} coffee={coffee} />)}
        <PaymentResume />
        <ConfirmButton />
      </StyledCoffees>
    </StyledSelectedCoffees>
  )
}

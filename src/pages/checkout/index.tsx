import {
	CompleteYourOrder,
  SelectedCoffees
} from '@components'
import { CoffeeContext } from '@context'
import { StyledPage } from './styles'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
	const { coffees } = useContext(CoffeeContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (!coffees.length)
			navigate('/')
	}, [])

  return (
    <StyledPage>
      <CompleteYourOrder />
      <SelectedCoffees />
    </StyledPage>
  )
}

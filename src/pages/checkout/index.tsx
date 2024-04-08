import {
	CompleteYourOrder,
  SelectedCoffees
} from '@components'
import { StyledPage } from './styles'

export function Checkout() {
  return (
    <StyledPage>
      <CompleteYourOrder />
      <SelectedCoffees />
    </StyledPage>
  )
}

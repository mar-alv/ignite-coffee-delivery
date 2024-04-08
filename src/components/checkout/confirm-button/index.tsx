import { CoffeeContext } from '@context'
import { StyledConfirmButton } from './styles'
import { useContext } from 'react'

export function ConfirmButton() {
  const {
    coffees,
    deliveryAddress,
    paymentMethod,
    confirmDelivery
  } = useContext(CoffeeContext)

  const isDisabled = !deliveryAddress?.cep ||
                     !deliveryAddress?.city ||
                     !deliveryAddress?.neighborhood ||
                     !deliveryAddress?.number ||
                     !deliveryAddress?.state ||
                     !deliveryAddress?.street ||
                     !paymentMethod ||
                     !coffees.length

  return (
    <StyledConfirmButton
			className={`button-g ${isDisabled ? '--disabled' : ''}`}
      onClick={confirmDelivery}
      to='/confirmed'
    >
      CONFIRMAR PEDIDO
    </StyledConfirmButton>
  )
}

import { CoffeeContext } from '@context'
import { StyledButton } from './styles'
import { useContext } from 'react'

export function ConfirmButton() {
  const {
    coffees,
    deliveryAddress,
    paymentMethod,
    confirmDelivery
  } = useContext(CoffeeContext)

  const isDisabled = !deliveryAddress.cep ||
                     !deliveryAddress.city ||
                     !deliveryAddress.neighborhood ||
                     !deliveryAddress.number ||
                     !deliveryAddress.state ||
                     !deliveryAddress.street ||
                     !paymentMethod ||
                     !coffees.length

  return (
    <StyledButton
			className={`button-g ${isDisabled ? '--disabled' : ''}`}
      onClick={confirmDelivery}
      to='/confirmed'
    >
      CONFIRMAR PEDIDO
    </StyledButton>
  )
}

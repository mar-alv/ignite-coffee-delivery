import clsx from 'clsx'
import { CoffeeContext } from '@context'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export function CheckoutConfirmButton() {
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
    <Link
      className={clsx('w-full mt-6 flex justify-center bg-yellow rounded-md font-roboto font-bold text-sm py-3 px-2 transition duration-500 ease-out', {
        'bg-baseButton text-baseLabel cursor-not-allowed': isDisabled,
        'hover:bg-yellowDark focus:bg-yellowDark text-white': !isDisabled
      })}
      onClick={confirmDelivery}
      to='/confirmed'
    >
      CONFIRMAR PEDIDO
    </Link>
  )
}

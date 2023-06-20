import clsx from 'clsx'
import { CoffeeContext } from '@context'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export function CheckoutConfirmButton() {
  const { deliveryAddress, paymentMethod, coffees } = useContext(CoffeeContext)

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
      to='/confirmed'
      className={clsx('w-full mt-6 flex justify-center bg-yellow rounded-md font-roboto font-bold text-sm py-3 px-2', {
        'bg-baseButton text-baseLabel cursor-not-allowed': isDisabled,
        'hover:bg-yellowDark focus:bg-yellowDark transition duration-500 ease-out text-white': !isDisabled
      })}
    >
      CONFIRMAR PEDIDO
    </Link>
  )
}

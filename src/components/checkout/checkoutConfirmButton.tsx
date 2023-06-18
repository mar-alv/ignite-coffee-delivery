import { Link } from 'react-router-dom'

export function CheckoutConfirmButton() {
  return (
    <Link to='/confirmed' className='w-full mt-6 flex justify-center bg-yellow rounded-md hover:bg-yellowDark focus:bg-yellowDark text-white font-roboto font-bold text-sm py-3 px-2 transition duration-500 ease-out'>
      CONFIRMAR PEDIDO
    </Link>
  )
}

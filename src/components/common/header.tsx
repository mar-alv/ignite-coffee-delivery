import { CoffeeContext } from '@context'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'

export function Header() {
  const { coffees } = useContext(CoffeeContext)

  return(
    <header className='flex justify-between px-[10%] pt-8'>
      <Link to='/'>
        <img src={logo} alt='Logo pequeno da Coffee Delivery' />
      </Link>
      <span className='inline-flex gap-3'>
        <div className='p-2 rounded-md bg-purpleLight items-center'>
          <span className='flex text-purpleDark font-roboto text-sm'>
            <MapPin size={22} weight='fill' className='text-purple' />
            Porto Alegre, RS
          </span>
        </div>
        <Link to='/checkout' className='w-[2.375rem] h-[2.375rem] relative bg-yellowLight flex items-center justify-center rounded-md'>
          <ShoppingCart size={22} className='text-yellowDark' weight='fill' />
          {!!coffees.length && (
            <div className='absolute flex items-center justify-center bg-yellowDark w-5 h-5 -top-2 -right-2 rounded-full'>
              <p className='text-white font-bold font-roboto text-xs'>
                {coffees.length}
              </p>
            </div>
          )}
        </Link>
      </span>
    </header>
  )
}

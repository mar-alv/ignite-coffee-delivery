import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export function Header() {
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
        <Link to='/checkout' className='w-[2.375rem] h-[2.375rem] bg-yellowLight flex items-center justify-center rounded-md'>
          <ShoppingCart size={22} className='text-yellowDark' weight='fill' />
        </Link>
      </span>
    </header>
  )
}

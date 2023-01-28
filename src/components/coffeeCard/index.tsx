import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <div className='bg-baseCard flex justify-center flex-col items-center relative'>
      <span className='bg-yellowLight rounded-full p-1 text-yellowDark text-[0.625rem] font-bold font-roboto'>
        Tradicional
      </span>
      <span className='text-baseSubTitle text-xl font-bold font-baloo2'>
        Expresso Tradicional
      </span>
      <span className='text-baseLabel text-sm font-baloo2'>
        O tradicional café feito com água quente e grãos moídos
      </span>
      <footer className='flex gap-2'>
        <span className='text-baseText'>
          <span className='font-roboto text-sm'>
            R$
          </span>
          <span className='font-baloo2 text-2xl font-extrabold'>
            9,90
          </span>
        </span>
        <div className='bg-baseButton p-2 gap-1 rounded-md flex items-center'>
          <button>
            <Minus size={14} weight='fill' className='text-purple' />
          </button>
          <span className='text-baseTitle'>
            1
          </span>
          <button>
            <Plus size={14} weight='fill' className='text-purple' />
          </button>
        </div>
        <button className='w-[2.375rem] h-[2.375rem] bg-purpleDark flex items-center justify-center rounded-md'>
          <ShoppingCart size={22} className='text-baseCard' weight='fill' />
        </button>
      </footer>
    </div>
  )
}

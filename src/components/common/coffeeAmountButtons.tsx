import { Plus, Minus } from 'phosphor-react'

export function CoffeeAmountButtons() {
  return (
    <div className='bg-baseButton px-2 gap-1 rounded-md flex items-center'>
      <button>
        <Minus size={14} weight='fill' className='text-purple hover:text-purpleDark focus:text-purpleDark' />
      </button>
      <span className='text-baseTitle'>
        1
      </span>
      <button>
        <Plus size={14} weight='fill' className='text-purple hover:text-purpleDark focus:text-purpleDark' />
      </button>
    </div>
  )
}

import { Trash } from 'phosphor-react'

export function CheckoutRemoveCoffeeButton() {
  return (
    <button className='bg-baseButton rounded-md hover:bg-baseHover focus:bg-baseHover'>
      <span className='font-roboto text-xs text-baseText gap-1 p-2 inline-flex hover:text-baseSubTitle focus:text-baseSubTitle'>
        <Trash size={16} className='text-purple hover:text-purpleDark focus:text-purpleDark' />
        REMOVER
      </span>
    </button>
  )
}

import { Trash } from 'phosphor-react'

export function CheckoutRemoveCoffeeButton() {
  return (
    <button className='bg-baseButton rounded-md hover:bg-baseHover focus:bg-baseHover'>
      <span className='font-roboto text-xs text-baseText gap-1 p-2 inline-flex hover:text-baseSubTitle focus:text-baseSubTitle transition duration-500 ease-out'>
        <Trash size={16} className='text-purple hover:text-purpleDark focus:text-purpleDark transition duration-500 ease-out' />
        REMOVER
      </span>
    </button>
  )
}

import { HTMLProps } from 'react'

type Props = HTMLProps<HTMLInputElement>

export function Input({ placeholder, ...rest }: Props) {
  return (
    <input
      placeholder={placeholder}
      className='text-sm p-3 outline-none hover:border-yellowDark focus:border-yellowDark rounded font-roboto bg-baseInput border-baseButton border-2 border-solid text-baseText placeholder:text-baseLabel transition duration-500 ease-out'
      {...rest}
    />
  )
}

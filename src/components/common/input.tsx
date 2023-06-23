import { DeliveryAddress } from '@interfaces'
import { HTMLProps } from 'react'
import { UseFormRegister } from 'react-hook-form'

type NameType = 'cep' |
                'city' |
                'complement' |
                'neighborhood' |
                'number' |
                'state'|
                'street'

interface Props extends HTMLProps<HTMLInputElement> {
  name: NameType
  register: UseFormRegister<DeliveryAddress>
}

export function Input({ className, name, placeholder, register, ...rest }: Props) {
  return (
    <input
      className={`text-sm p-3 outline-none hover:border-yellowDark focus:border-yellowDark rounded font-roboto bg-baseInput border-baseButton border-2 border-solid text-baseText placeholder:text-baseLabel transition duration-500 ease-out ${className}`}
      placeholder={placeholder}
      {...register(name)}
      {...rest}
    />
  )
}

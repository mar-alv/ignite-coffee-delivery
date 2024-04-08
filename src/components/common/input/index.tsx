import { DeliveryAddress } from '@interfaces'
import { ComponentProps } from 'react'
import { StyledInput, StyledInputWrapper, StyledOptional } from './styles'
import { UseFormRegister } from 'react-hook-form'

type NameType = 'cep' |
                'city' |
                'complement' |
                'neighborhood' |
                'number' |
                'state'|
                'street'

interface Props extends ComponentProps<'input'> {
  name: NameType
  register: UseFormRegister<DeliveryAddress>
}

export function Input({ className, name, placeholder, register, ...props }: Props) {
  return (
		<StyledInputWrapper>
    	<StyledInput
				placeholder={placeholder}
				className='text-s'
				{...register(name)}
				{...props}
			/>
			{!props.required ? (
				<StyledOptional className='text-xs'>
					Opcional
				</StyledOptional>
			) : <></>}
		</StyledInputWrapper>
  )
}

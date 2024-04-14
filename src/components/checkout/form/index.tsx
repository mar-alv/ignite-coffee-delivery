import { CoffeeContext } from '@context'
import { defaultTheme } from '@styles'
import { DeliveryAddress, ViaCepDeliveryAddress } from '@interfaces'
import { Input } from '@components'
import { MapPinLine } from 'phosphor-react'
import { stringUtils } from '@utils'
import { StyledForm, StyledFormHeader, StyledInputs } from './styles'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export function CheckoutForm() {
  const { deliveryAddress, saveDeliveryAddress } = useContext(CoffeeContext)

  const defaultValues: DeliveryAddress = deliveryAddress ?? {
    cep: '',
    city: '',
    complement: '',
    neighborhood: '',
    number: '',
    state: '',
    street: ''
  }

  const { register, setValue, watch } = useForm({ defaultValues })

  function fulfilFields(viaCepDeliveryAddress: ViaCepDeliveryAddress) {
    setValue('city', viaCepDeliveryAddress.localidade)
    setValue('neighborhood', viaCepDeliveryAddress.bairro)
    setValue('state', viaCepDeliveryAddress.uf)
    setValue('street', viaCepDeliveryAddress.logradouro)
  }

  useEffect(() => {
    async function getCep() {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${deliveryAddress?.cep}/json`)

        const viaCepDeliveryAddress: ViaCepDeliveryAddress = await response.json()

        if (!viaCepDeliveryAddress.erro)
          fulfilFields(viaCepDeliveryAddress)
      }
      catch (error) {
        setValue('cep', '')
      }
    }

    if (stringUtils.isCepValid(deliveryAddress?.cep))
      getCep()

  },[deliveryAddress?.cep])

  useEffect(() => {
    const subscription = watch((data) => {
      const updatedDeliveryAddress: DeliveryAddress = {
        cep: data.cep ?? '',
        city: data.city ?? '',
        complement: data.complement,
        neighborhood: data.neighborhood ?? '',
        number: data.number ?? '',
        state: data.state ?? '',
        street: data.street ?? '',
      }

      saveDeliveryAddress(updatedDeliveryAddress)
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <StyledForm>
      <StyledFormHeader>
				<MapPinLine color={defaultTheme['yellow-dark']} size={22} />

				<h3 className='text-m-normal'>
					Endereço de Entrega
				</h3>

				<p className='text-s'>
					Informe o endereço onde deseja receber seu pedido
				</p>
      </StyledFormHeader>

      <StyledInputs>
        <Input
          name='cep'
          register={register}
          maxLength={8}
          pattern='\d*'
          placeholder='CEP'
          required
        />

        <Input
          name='street'
          register={register}
          placeholder='Rua'
          required
        />

				<Input
					name='number'
					register={register}
					maxLength={8}
					pattern='\d*'
					placeholder='Número'
					type='number'
					required
				/>
				<Input
					name='complement'
					register={register}
					placeholder='Complemento'
				/>
				<Input
					name='neighborhood'
					register={register}
					placeholder='Bairro'
					required
				/>

				<Input
					name='city'
					register={register}
					placeholder='Cidade'
					required
				/>
				<Input
					name='state'
					register={register}
					placeholder='UF'
					required
				/>
      </StyledInputs>
    </StyledForm>
  )
}

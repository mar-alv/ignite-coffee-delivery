import { CoffeeContext } from '@context'
import { DeliveryAddress } from '@interfaces'
import { Input } from '@components'
import { MapPinLine } from 'phosphor-react'
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

  const { register, watch } = useForm({ defaultValues })

  useEffect(() => {
    const subscription = watch((data) => {
      const updatedDeliveryAddress: DeliveryAddress = {
        cep: data.cep,
        city: data.city,
        complement: data.complement,
        neighborhood: data.neighborhood,
        number: data.number,
        state: data.state,
        street: data.street,
      }

      saveDeliveryAddress(updatedDeliveryAddress)
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <form className='bg-baseCard mt-4 p-10 rounded-md'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <MapPinLine size={22} className='text-yellowDark mr-2' />
          <div className='font-roboto'>
            <h3 className='text-baseSubTitle font-roboto'>
              Endereço de Entrega
            </h3>
            <p className='text-baseText text-sm'>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-8'>
        <Input
          name='cep'
          register={register}
          className='w-[200px]'
          maxLength={8}
          pattern='\d*'
          placeholder='CEP'
          required
        />
        <Input
          name='street'
          register={register}
          className='w-[560px] mt-4'
          placeholder='Rua'
          required
        />
        <div className='grid grid-cols-row4th gap-3 my-4 relative'>
          <Input
            name='number'
            register={register}
            className='w-[200px]'
            maxLength={8}
            pattern='\d*'
            placeholder='Número'
            type='number'
            required
          />
          <Input
            name='complement'
            register={register}
            className='w-[348px]'
            placeholder='Complemento'
          />
          <p className='flex self-center absolute right-12 italic text-baseLabel text-xs font-roboto'>Opcional</p>
        </div>
        <div className='grid grid-cols-row5th gap-3'>
          <Input
            name='neighborhood'
            register={register}
            className='w-[200px]'
            placeholder='Bairro'
            required
          />
          <Input
            name='city'
            register={register}
            className='w-[276px]'
            placeholder='Cidade'
            required
          />
          <Input
            name='state'
            register={register}
            className='w-[60px]'
            placeholder='UF'
            required
          />
        </div>
      </div>
    </form>
  )
}

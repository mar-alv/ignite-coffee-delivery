import { Input } from '@components'
import { MapPinLine } from 'phosphor-react'

// FIXME: Form must occupy more space to the right
export function CheckoutForm() {
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
      {/*FIXME: Adjust inputs length*/}
      <div className='flex flex-col mt-8'>
        <Input placeholder='CEP' />
        <div className='mt-4'>
          <Input placeholder='Rua' />
        </div>
        <div className='grid grid-cols-row4th gap-3 my-4'>
          <Input type='number' placeholder='Número' />
          <Input placeholder='Complemento' />
        </div>
        <div className='grid grid-cols-row5th gap-3'>
          <Input placeholder='Bairro' />
          <Input placeholder='Cidade' />
          <Input placeholder='UF' />
        </div>
      </div>
    </form>
  )
}

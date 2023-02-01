import { Input } from '@components'
import { MapPinLine } from 'phosphor-react'

export function CheckoutForm() {
  return (
    <form className='bg-baseCard mt-4 p-10 rounded-md'>
      <header className='flex items-center'>
        <div className='flex items-center'>
          <MapPinLine size={22} weight='fill' className='text-yellowDark mr-2' />
          <div className='text-baseSubTitle font-roboto'>
            <p className='text-baseSubTitle'>
            Endereço de Entrega
            </p>
            <p className='text-baseText'>
            Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
      </header>
      <div className='flex flex-col mt-8'>
        <div className='mb-4'>
          <Input placeholder='CEP' />
        </div>
        <Input placeholder='Rua' />
        <div className='grid grid-cols-row4th gap-3 my-4'>
          <Input type='number' placeholder='Número' />
          <Input placeholder='Complemento' />
        </div>
        <div className='grid grid-cols-row5th gap-3 mb-4'>
          <Input placeholder='Bairro' />
          <Input placeholder='Cidade' />
          <Input placeholder='UF' />
        </div>
      </div>
    </form>
  )
}

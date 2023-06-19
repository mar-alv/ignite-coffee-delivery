import { Input } from '@components'
import { MapPinLine } from 'phosphor-react'

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
      <div className='flex flex-col mt-8'>
        <Input placeholder='CEP' className='w-[200px]' />
        <Input placeholder='Rua' className='w-[560px] mt-4' />
        <div className='grid grid-cols-row4th gap-3 my-4 relative'>
          <Input type='number' placeholder='Número' className='w-[200px]' />
          <Input placeholder='Complemento' className='w-[348px]' />
          <p className='flex self-center absolute right-9 italic text-baseLabel text-xs font-roboto'>Opcional</p>
        </div>
        <div className='grid grid-cols-row5th gap-3'>
          <Input placeholder='Bairro' className='w-[200px]' />
          <Input placeholder='Cidade' className='w-[276px]' />
          <Input placeholder='UF' className='w-[60px]'/>
        </div>
      </div>
    </form>
  )
}

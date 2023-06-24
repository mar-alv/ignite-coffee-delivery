import { CoffeeContext } from '@context'
import confirmedImage from '../assets/confirmedImage.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { stringUtils } from '@utils'
import { useContext } from 'react'

export function Confirmed() {
  const { deliveryAddress, paymentMethod } = useContext(CoffeeContext)

  return (
    <div className='flex flex-col mt-20 px-[10%]'>
      <div>
        <h1 className='text-yellowDark font-baloo2 font-extrabold text-[2rem]'>
          Uhu! Pedido confirmado
        </h1>
        <h2 className='text-baseSubTitle text-xl font-roboto'>
          Agora é só aguardar que logo o café chegará até você
        </h2>
      </div>
      <div className='flex mt-10 justify-between'>
        <div className='flex items-center bg-gradient-to-r from-yellow via-purpleLight to-purple rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]'>
          <div className='flex flex-col p-1'>
            <div className='flex items-center bg-background px-9 py-6 rounded-tl-md rounded-tr-[2.25rem]'>
              <div className='bg-purple mr-3 p-2 rounded-full'>
                <MapPin size={16} weight='fill' className='text-background' />
              </div>
              <div className='text-baseText font-roboto'>
                <p>
                  Entrega em <b>{deliveryAddress?.street}, {deliveryAddress?.number}, {deliveryAddress?.cep} </b>
                </p>
                <p>
                  {deliveryAddress?.neighborhood} - {deliveryAddress?.city}, {deliveryAddress?.state}
                </p>
                {deliveryAddress?.complement && (
                  <p>
                    {deliveryAddress?.complement}
                  </p>
                )}
              </div>
            </div>
            <div className='flex items-center bg-background px-9 py-6'>
              <div className='bg-yellow mr-3 p-2 rounded-full'>
                <Timer size={16} weight='fill' className='text-background' />
              </div>
              <div className='text-baseText font-roboto'>
                <p>
                  Previsão de entrega
                </p>
                <b>
                  20 min - 30 min
                </b>
              </div>
            </div>
            <div className='flex items-center bg-background px-9 py-6 rounded-br-md rounded-bl-[2.25rem]'>
              <div className='bg-yellowDark mr-3 p-2 rounded-full'>
                <CurrencyDollar size={16} weight='fill' className='text-background' />
              </div>
              <div className='text-baseText font-roboto'>
                <p>
                  Pagamento na entrega
                </p>
                <b>
                  {stringUtils.toCapitalize(paymentMethod?.description)}
                </b>
              </div>
            </div>
          </div>
        </div>
        <img
          src={confirmedImage}
          alt='Imagem média ilustrativa de um entregador indo levar a entrega até você'
        />
      </div>
    </div>
  )
}

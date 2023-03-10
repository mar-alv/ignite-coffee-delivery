import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import confirmedImage from '../assets/confirmedImage.png'

export function Confirmed() {
  return (
    <div className='flex flex-col mt-20 px-[10%]'>
      <header>
        <h1 className='text-yellowDark font-baloo2 font-extrabold text-[2rem]'>
            Uhu! Pedido confirmado
        </h1>
        <h2 className='text-baseSubTitle text-xl font-roboto'>
            Agora é só aguardar que logo o café chegará até você
        </h2>
      </header>
      <div className='flex mt-10 justify-between'>
        <div className='p-10 border-solid border-yellow border-2 gap-10 flex flex-col rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]'>
          <div className='flex items-center'>
            <div className='bg-purple mr-3 p-2 rounded-full'>
              <MapPin size={16} weight='fill' className='text-background' />
            </div>
            <div className='text-baseText font-roboto'>
              <p>
                  Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>
              <p>
                  Farrapos - Porto Alegre, RS
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='bg-yellow mr-3 p-2 rounded-full'>
              <Timer size={16} weight='fill' className='text-background' />
            </div>
            <div className='text-baseText font-roboto'>
              <p>
                  Previsão de entrega
              </p>
              <p>
                <b>
                    20 min - 30 min
                </b>
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='bg-yellowDark mr-3 p-2 rounded-full'>
              <CurrencyDollar size={16} weight='fill' className='text-background' />
            </div>
            <div className='text-baseText font-roboto'>
              <p>
                  Pagamento na entrega
              </p>
              <p>
                <b>
                    Cartão de Crédito
                </b>
              </p>
            </div>
          </div>
        </div>
        <img src={confirmedImage} alt="Imagem média ilustrativa de um entregador indo levar a entrega até você" />
      </div>
    </div>
  )
}

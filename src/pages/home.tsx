import intro from '../assets/intro.png'
import { CoffeeList } from '@components'

export function Home() {
  return (
    <>
      <img
        src={intro}
        className='w-[100%]'
        alt='Imagem grande introduzindo as qualidades dos serviços prestados pela Coffee Delivery' />
      <CoffeeList />
    </>
  )
}

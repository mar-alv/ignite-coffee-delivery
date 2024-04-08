import intro from '../assets/intro.png'
import { CoffeeList } from '@components'

export function Home() {
  return (
    <main>
      <img
        src={intro}
        className='w-full'
        alt='Imagem grande introduzindo as qualidades dos serviços prestados pela Coffee Delivery' />

      <CoffeeList />
    </main>
  )
}

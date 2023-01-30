import { CoffeeList, Header } from '@components'
import intro from './assets/intro.png'

export function App() {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <img
        src={intro}
        className='w-[100%]'
        alt='Imagem grande introduzindo as qualidades dos serviços prestados pela Coffee Delivery' />
      <CoffeeList />
    </div>
  )
}

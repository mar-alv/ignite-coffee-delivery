import { CoffeeList, Header } from '@components'
import intro from './assets/intro.png'

export function App() {
  return (
    <div className='h-screen bg-background'>
      <Header />
      <img className='w-[100%]' src={intro} alt='Imagem grande introduzindo as qualidades dos serviços prestados pela Coffee Delivery' />
      <CoffeeList />
    </div>
  )
}

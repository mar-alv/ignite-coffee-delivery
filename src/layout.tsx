import { Header } from '@components'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='min-h-screen bg-background pb-32'>
      <Header />
      <Outlet />
    </div>
  )
}

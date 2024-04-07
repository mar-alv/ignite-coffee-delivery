import { Header } from '@components'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div id='app'>
      <Header />
      <Outlet />
    </div>
  )
}

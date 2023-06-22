import { Layout } from './layout'
import { Routes, Route } from 'react-router-dom'
import { Checkout, Confirmed, Home } from '@pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/confirmed' element={<Confirmed />} />
      </Route>
    </Routes>
  )
}

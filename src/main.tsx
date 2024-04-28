import '../global.css'
import React from 'react'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from '@context'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<CoffeeContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CoffeeContextProvider>
  </React.StrictMode>,
)

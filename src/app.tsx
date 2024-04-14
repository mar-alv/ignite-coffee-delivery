import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from '@context'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './router'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}

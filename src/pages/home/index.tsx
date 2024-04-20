import { CoffeeList, Hero } from '@components'
import { StyledPage } from './styles'

export function Home() {
  return (
    <StyledPage>
			<Hero />

      <CoffeeList />
    </StyledPage>
  )
}

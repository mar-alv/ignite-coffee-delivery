import '@testing-library/jest-dom'
import { CoffeeList } from '@components'
import { coffees } from '../../src/coffees'
import { customRender } from '../test-utils'
import { screen } from '@testing-library/react'

describe('coffee list tests', () => {
  it('should render all coffees', () => {
    // arrange
    customRender(<CoffeeList />)

    // act
    const coffeesCount = screen.getAllByText('R$').length

    // assert
    expect(coffeesCount).toBe(coffees.length)
  })
})

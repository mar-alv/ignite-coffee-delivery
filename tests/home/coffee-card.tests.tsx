import '@testing-library/jest-dom'
import { CoffeeCard } from '@components'
import { coffees } from '../../src/coffees'
import { customRender } from '../test-utils'
import { fireEvent, screen } from '@testing-library/react'

describe('coffee card Tests', () => {
  it('should add a coffee to the cart', () => {
		const coffeesInTheCart = []

    // arrange
    customRender(<CoffeeCard coffee={coffees[0]} />, {
			addToCart(coffee) {
				coffeesInTheCart.push(coffee)
			},
		})

    // act
    const addCoffeeButton = screen.getByTestId('add-coffee-button')

		fireEvent.click(addCoffeeButton)

    // assert
    expect(coffeesInTheCart.length).toBe(1)
  })
})

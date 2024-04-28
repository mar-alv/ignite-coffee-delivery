import '@testing-library/jest-dom'
import { App } from '../../src/app'
import { coffees } from '../../src/coffees'
import { SelectedCoffees } from '@components'
import { customRender, customRerender } from '../test-utils'
import { fireEvent, screen } from '@testing-library/react'

describe('selected coffees tests', () => {
	it('should remove the coffee in the cart when clicking on the button', () => {
		let coffeesInCart = [coffees[0], coffees[1]]

    // arrange
    const { rerender } = customRender(<SelectedCoffees />, {
			coffees: coffeesInCart,
			removeFromCart(coffeeId) {
				coffeesInCart = coffeesInCart.filter(i => i.id !== coffeeId)
			}
		})

		// act
		const button = screen.getAllByText('REMOVER')[0]

		fireEvent.click(button)

		customRerender(rerender, <SelectedCoffees />, {
			coffees: coffeesInCart
		})

    // assert
    expect(screen.getAllByText('REMOVER').length).toBe(1)
  })
})

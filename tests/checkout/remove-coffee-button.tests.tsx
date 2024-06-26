import '@testing-library/jest-dom'
import { coffees } from '../../src/coffees'
import { customRender, customRerender } from '../test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { SelectedCoffees } from '@components'

describe('remove coffee button tests', () => {
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

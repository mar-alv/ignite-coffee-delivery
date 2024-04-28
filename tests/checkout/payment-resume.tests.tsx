import '@testing-library/jest-dom'
import { coffees } from '../../src/coffees'
import { customRender, customRerender } from '../test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { paymentUtils } from '@utils'
import { SelectedCoffees } from '@components'

describe('payment resume tests', () => {
	it('should update the values when increasing the coffee amount in the cart', () => {
		let coffeesInTheCart = [coffees[0]]

		const initialCoffeesPrice = paymentUtils.getCoffeesPrice(coffeesInTheCart)
		const initialFeePrice = paymentUtils.getFeePrice(initialCoffeesPrice)
		const initialTotalPrice = paymentUtils.getTotalPrice(initialCoffeesPrice, initialFeePrice)

    // arrange
    const { rerender } = customRender(<SelectedCoffees />, {
			coffees: coffeesInTheCart,
			increaseAmountInCart(coffeeId) {
				coffeesInTheCart = coffeesInTheCart.map(i => {
					if (i.id === coffeeId)
						i.amount++

					return i
				})
			}
		})

		// act
		const button = screen.getByTestId('increase-amount-button')

		fireEvent.click(button)

		customRerender(rerender, <SelectedCoffees />, {
			coffees: coffeesInTheCart,
		})

		const finalCoffeePrice = paymentUtils.getCoffeesPrice(coffeesInTheCart)
		const finalFeePrice = paymentUtils.getFeePrice(finalCoffeePrice)
		const finalTotalPrice = paymentUtils.getTotalPrice(finalCoffeePrice, finalFeePrice)

    // assert
    expect(finalCoffeePrice).toBeGreaterThan(initialCoffeesPrice)
    expect(finalFeePrice).toBeGreaterThan(initialFeePrice)
    expect(finalTotalPrice).toBeGreaterThan(initialTotalPrice)
  })

	it('should update the values when decreasing the coffee amount in the cart', () => {
		let coffeesInTheCart = [{...coffees[0], amount: 2}]

		const initialCoffeesPrice = paymentUtils.getCoffeesPrice(coffeesInTheCart)
		const initialFeePrice = paymentUtils.getFeePrice(initialCoffeesPrice)
		const initialTotalPrice = paymentUtils.getTotalPrice(initialCoffeesPrice, initialFeePrice)

    // arrange
    const { rerender } = customRender(<SelectedCoffees />, {
			coffees: coffeesInTheCart,
			decreaseAmountInCart(coffeeId) {
				coffeesInTheCart = coffeesInTheCart.map(i => {
					if (i.id === coffeeId && i.amount > 1)
						i.amount--

					return i
				})
			}
		})

		// act
		const button = screen.getByTestId('decrease-amount-button')

		fireEvent.click(button)

		customRerender(rerender, <SelectedCoffees />, {
			coffees: coffeesInTheCart,
		})

		const finalCoffeePrice = paymentUtils.getCoffeesPrice(coffeesInTheCart)
		const finalFeePrice = paymentUtils.getFeePrice(finalCoffeePrice)
		const finalTotalPrice = paymentUtils.getTotalPrice(finalCoffeePrice, finalFeePrice)

    // assert
    expect(finalCoffeePrice).toBeLessThan(initialCoffeesPrice)
    expect(finalFeePrice).toBeLessThan(initialFeePrice)
    expect(finalTotalPrice).toBeLessThan(initialTotalPrice)
  })

	it('should update the values when removing a coffee in the cart', () => {
		let coffeesInTheCart = [coffees[0], coffees[1]]

		const initialCoffeesPrice = paymentUtils.getCoffeesPrice(coffeesInTheCart)
		const initialFeePrice = paymentUtils.getFeePrice(initialCoffeesPrice)
		const initialTotalPrice = paymentUtils.getTotalPrice(initialCoffeesPrice, initialFeePrice)

    // arrange
    const { rerender } = customRender(<SelectedCoffees />, {
			coffees: coffeesInTheCart,
			removeFromCart(coffeeId) {
				coffeesInTheCart = coffeesInTheCart.filter(i => i.id !== coffeeId)
			}
		})

		// act
		const button = screen.getAllByText('REMOVER')[0]

		fireEvent.click(button)

		customRerender(rerender, <SelectedCoffees />, {
			coffees: coffeesInTheCart,
		})

		const finalCoffeePrice = paymentUtils.getCoffeesPrice(coffeesInTheCart)
		const finalFeePrice = paymentUtils.getFeePrice(finalCoffeePrice)
		const finalTotalPrice = paymentUtils.getTotalPrice(finalCoffeePrice, finalFeePrice)

    // assert
    expect(finalCoffeePrice).toBeLessThan(initialCoffeesPrice)
    expect(finalFeePrice).toBeLessThan(initialFeePrice)
    expect(finalTotalPrice).toBeLessThan(initialTotalPrice)
  })
})

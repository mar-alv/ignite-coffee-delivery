import '@testing-library/jest-dom'
import { CoffeeAmountButtons } from '@components'
import { customRender, customRerender } from '../test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { ReactNode } from 'react'

describe('coffee amount buttons Tests', () => {
	let amount = 1

	function handleDecreaseAmount() {
		if (amount > 1)
			amount--
	}

	function handleIncreaseAmount() {
		amount++
	}

	function rerenderComponent(rerender: (ui: ReactNode) => void) {
		customRerender(rerender,
			<CoffeeAmountButtons
				amount={amount}
				onDecreaseAmount={handleDecreaseAmount}
				onIncreaseAmount={handleIncreaseAmount}
			/>
		)
	}

  it('should increase the amount of coffees', () => {
		// arrange
    const { rerender } = customRender(
			<CoffeeAmountButtons
				amount={1}
				onDecreaseAmount={handleDecreaseAmount}
				onIncreaseAmount={handleIncreaseAmount}
			/>
		)

    // act
    const button = screen.getByTestId('increase-amount-button')

    fireEvent.click(button)

		rerenderComponent(rerender)

    // assert
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('should decrease the amount of coffees', () => {
		// arrange
    const { rerender } = customRender(
			<CoffeeAmountButtons
				amount={2}
				onDecreaseAmount={handleDecreaseAmount}
				onIncreaseAmount={handleIncreaseAmount}
			/>
		)

    // act
    const button = screen.getByTestId('decrease-amount-button')

    fireEvent.click(button)

		rerenderComponent(rerender)
  
    // assert
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should not decrease the amount of coffees if the current amount is 1', () => {
		// arrange
    const { rerender } = customRender(
			<CoffeeAmountButtons
				amount={1}
				onDecreaseAmount={handleDecreaseAmount}
				onIncreaseAmount={handleIncreaseAmount}
			/>
		)

    // act
    const button = screen.getByTestId('decrease-amount-button')

    fireEvent.click(button)

		rerenderComponent(rerender)

    // assert
    expect(screen.queryByText('0')).not.toBeInTheDocument()
  })
})

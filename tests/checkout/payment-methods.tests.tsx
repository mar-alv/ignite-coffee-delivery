import '@testing-library/jest-dom'
import { customRender, customRerender } from '../test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { PaymentMethod } from '@interfaces'
import { PaymentMethods } from '@components'

describe('payment methods tests', () => {
	it('should select a payment method', () => {
		let paymentMethod: PaymentMethod | null = null

    // arrange
    const { rerender } = customRender(<PaymentMethods />, {
			choosePaymentMethod(selectedPaymentMethod) {
				paymentMethod = selectedPaymentMethod
			}
		})

		// act
		const button = screen.getByText('CARTÃO DE CRÉDITO')

		fireEvent.click(button)

		customRerender(rerender, <PaymentMethods />, {
			paymentMethod
		})

    // assert
    expect(button.classList.contains('--selected')).toBeTruthy()
  })
})

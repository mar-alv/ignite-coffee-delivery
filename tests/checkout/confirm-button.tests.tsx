import '@testing-library/jest-dom'
import { coffees } from '../../src/coffees'
import { ConfirmButton } from '@components'
import { customRender } from '../test-utils'
import { screen } from '@testing-library/react'

describe('confirm button Tests', () => {
  it('should disable the button if there is no delivery address, payment method or coffee in the cart', () => {
    // arrange
    customRender(<ConfirmButton />)

		// act
		const button = screen.getByText('CONFIRMAR PEDIDO')

    // assert
    expect(button.classList.contains('--disabled')).toBeTruthy()
  })

  it('should enable the button if there is delivery address, payment method and coffee in the cart', () => {
    // arrange
    customRender(<ConfirmButton />, {
			coffees: [coffees[0]],
			deliveryAddress: {
				cep: '12345678',
				city: 'Cidade',
				complement: 'Complemento',
				neighborhood: 'Bairro',
				number: '123',
				state: 'XX',
				street: 'Rua'
			},
			paymentMethod: {
				id: 0,
				description: 'CARTÃO DE CRÉDITO',
				isSelected: true
			}
		})

		// act
		const button = screen.getByText('CONFIRMAR PEDIDO')

    // assert
    expect(button.classList.contains('--disabled')).toBeFalsy()
  })
})

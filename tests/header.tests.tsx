import '@testing-library/jest-dom'
import { App } from '../src/app'
import { coffees } from '../src/coffees'
import { customRender } from './test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { Header } from '@components'

describe('header Tests', () => {
  it('should not show the amount of coffees if the cart is empty', () => {
    // arrange
    customRender(<Header />)

    // assert
    expect(screen.queryByText('1')).not.toBeInTheDocument()
  })

  it('should show the amount of coffees if the cart is not empty', () => {
    // arrange
    customRender(<Header />, {
			coffees: [coffees[0]]
		})

    // assert
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should not go to the checkout page if the cart is empty', () => {
    // arrange
    customRender(<App />)

    // act
    const checkoutLinkButton = screen.getByTestId('checkout-link-button')

		fireEvent.click(checkoutLinkButton)

    // assert
    expect(screen.queryByText('Complete seu pedido')).not.toBeInTheDocument()
  })

  it('should go to the checkout page if the cart is not empty', () => {
    // arrange
    customRender(<App />, {
			coffees: [coffees[0]]
		})

    // act
    const checkoutLinkButton = screen.getByTestId('checkout-link-button')

		fireEvent.click(checkoutLinkButton)

    // assert
    expect(screen.getByText('Complete seu pedido')).toBeInTheDocument()
  })

	it('should go to the home page', () => {
    // arrange
    customRender(<App />, {
			coffees: [coffees[0]]
		})

    // act
    const checkoutLinkButton = screen.getByTestId('checkout-link-button')
		fireEvent.click(checkoutLinkButton)

    const homeLinkButton = screen.getByTestId('home-link-button')
		fireEvent.click(homeLinkButton)

    // assert
    expect(screen.getByText('Nossos cafés')).toBeInTheDocument()
  })
})

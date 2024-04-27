import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Coffee, DeliveryAddress, PaymentMethod } from '@interfaces'
import { CoffeeContext } from '@context'
import { ReactNode } from 'react'
import { render } from '@testing-library/react'

interface CustomValueProps {
  coffees?: Coffee[]
  deliveryAddress?: DeliveryAddress
	hasConfirmedDelivery?: boolean
  paymentMethod?: PaymentMethod | null
  addToCart?(coffee: Coffee): void
  confirmDelivery?(): void
  choosePaymentMethod?(paymentMethod: PaymentMethod): void
  decreaseAmountInCart?(coffeeId: number): void
  increaseAmountInCart?(coffeeId: number): void
  removeFromCart?(coffeeId: number): void
  saveDeliveryAddress?(deliveryAddress: DeliveryAddress): void
}

const defaultValue = {
	coffees: [],
  deliveryAddress: {
		cep: '',
		city: '',
		complement: '',
		neighborhood: '',
		number: '',
		state: '',
		street: ''
	},
	hasConfirmedDelivery: false,
  paymentMethod: null,
  addToCart(coffee: Coffee) {},
  confirmDelivery() {},
  choosePaymentMethod(paymentMethod: PaymentMethod) {},
  decreaseAmountInCart(coffeeId: number) {},
  increaseAmountInCart(coffeeId: number) {},
  removeFromCart(coffeeId: number) {},
  saveDeliveryAddress(deliveryAddress: DeliveryAddress) {}
}

export function customRender(children: ReactNode, customValue = {} as CustomValueProps) {
  const { rerender } = render(
    <BrowserRouter>
			<CoffeeContext.Provider
				value={{
					...defaultValue,
					...customValue
				}}
				>
				{children}
			</CoffeeContext.Provider>
		</BrowserRouter>
  )

  return { rerender }
}

export function customRerender(rerender: (ui: ReactNode) => void, children: ReactNode, customValue = {} as CustomValueProps) {
  rerender(
    <BrowserRouter>
			<CoffeeContext.Provider
				value={{
					...defaultValue,
					...customValue
				}}
				>
				{children}
			</CoffeeContext.Provider>
		</BrowserRouter>
  )
}

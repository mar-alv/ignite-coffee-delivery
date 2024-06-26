import {
	addToCartAction,
  choosePaymentMethodAction,
  confirmDeliveryAction,
  decreaseAmountInCartAction,
  increaseAmountInCartAction,
  removeFromCartAction,
  saveDeliveryAddressAction,
} from './actions'
import { Coffee, DeliveryAddress, PaymentMethod } from '@interfaces'
import { coffeeReducer } from './reducer'
import {
	ReactNode,
	useReducer,
	createContext,
} from 'react'

interface CoffeeContextType {
  coffees: Coffee[]
  deliveryAddress: DeliveryAddress
	hasConfirmedDelivery: boolean
  paymentMethod: PaymentMethod | null
  addToCart(coffee: Coffee): void
  confirmDelivery(): void
  choosePaymentMethod(paymentMethod: PaymentMethod): void
  decreaseAmountInCart(coffeeId: number): void
  increaseAmountInCart(coffeeId: number): void
  removeFromCart(coffeeId: number): void
  saveDeliveryAddress(deliveryAddress: DeliveryAddress): void
}

interface Props {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export const CoffeeContextProvider = ({
  children
}: Props) => {
  const [coffeesState, dispatch] = useReducer(
    coffeeReducer,
    {
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
      paymentMethod: null
    }
  )

  const { coffees, deliveryAddress, hasConfirmedDelivery, paymentMethod } = coffeesState

  function addToCart(coffee: Coffee) {
    dispatch(addToCartAction(coffee))
  }

  function confirmDelivery() {
    dispatch(confirmDeliveryAction())
  }

  function choosePaymentMethod(paymentMethod: PaymentMethod) {
    dispatch(choosePaymentMethodAction(paymentMethod))
  }

  function decreaseAmountInCart(coffeeId: number) {
    dispatch(decreaseAmountInCartAction(coffeeId))
  }

  function increaseAmountInCart(coffeeId: number) {
    dispatch(increaseAmountInCartAction(coffeeId))
  }

  function removeFromCart(coffeeId: number) {
    dispatch(removeFromCartAction(coffeeId))
  }

  function saveDeliveryAddress(deliveryAddress: DeliveryAddress) {
    dispatch(saveDeliveryAddressAction(deliveryAddress))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        deliveryAddress,
				hasConfirmedDelivery,
        paymentMethod,
        addToCart,
        choosePaymentMethod,
        confirmDelivery,
        decreaseAmountInCart,
        increaseAmountInCart,
        removeFromCart,
        saveDeliveryAddress
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

import {
  FC,
  ReactNode,
  useReducer,
  createContext,
} from 'react'
import {
  addToCartAction,
  choosePaymentMethodAction,
  confirmDeliveryAction,
  coffeeReducer,
  decreaseAmountInCartAction,
  increaseAmountInCartAction,
  removeFromCartAction,
  saveDeliveryAddressAction,
} from '@reducer'
import { Coffee, DeliveryAddress, PaymentMethod } from '@interfaces'

interface CoffeeContextType {
  coffees: Coffee[]
  deliveryAddress: DeliveryAddress
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

export const CoffeeContextProvider: FC<Props> = ({
  children,
}) => {
  const [cyclesState, dispatch] = useReducer(
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
      paymentMethod: null
    }
  )

  const { coffees, deliveryAddress, paymentMethod } = cyclesState

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

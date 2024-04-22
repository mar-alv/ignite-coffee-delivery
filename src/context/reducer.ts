import { ActionType } from './actions'
import { Coffee, DeliveryAddress, PaymentMethod } from '@interfaces'

interface CoffeeState {
  coffees: Coffee[]
  deliveryAddress: DeliveryAddress
	hasConfirmedDelivery: boolean
  paymentMethod: PaymentMethod | null
}

export type Action =
  | { type: ActionType.ADD_TO_CART; payload: { coffee: Coffee } }
  | { type: ActionType.CHOOSE_PAYMENT_METHOD; payload: { paymentMethod: PaymentMethod } }
  | { type: ActionType.CONFIRM_DELIVERY }
  | { type: ActionType.DECREASE_AMOUNT_IN_CART; payload: { coffeeId: number } }
  | { type: ActionType.INCREASE_AMOUNT_IN_CART; payload: { coffeeId: number } }
  | { type: ActionType.REMOVE_FROM_CART; payload: { coffeeId: number } }
  | { type: ActionType.SAVE_DELIVERY_ADDRESS; payload: { deliveryAddress: DeliveryAddress } }

export function coffeeReducer(state: CoffeeState, action: Action): CoffeeState {
  switch (action.type) {
		case ActionType.ADD_TO_CART:
			const { id, amount } = action.payload.coffee

			const isCoffeeInTheCart = state.coffees.some(i =>
				i.id === id
			)

			if (isCoffeeInTheCart) {
				return {
					...state,
					coffees: state.coffees.map(i => {
						if (i.id === id)
							return {
								...i,
								amount: i.amount + amount
							}

						return i
					})
				}
			}

			return {
				...state,
				coffees: [...state.coffees, action.payload.coffee]
			}

  case ActionType.CHOOSE_PAYMENT_METHOD:
		return {
			...state,
			paymentMethod: action.payload.paymentMethod
		}

  case ActionType.CONFIRM_DELIVERY:
    return {
			...state,
			coffees: [],
			hasConfirmedDelivery: true
    }

  case ActionType.DECREASE_AMOUNT_IN_CART:
    return {
			...state,
			coffees: state.coffees.map(i => {
        if (i.id === action.payload.coffeeId && i.amount > 1)
					return {
						...i,
						amount: i.amount - 1
					}

        return i
      })
    }

  case ActionType.INCREASE_AMOUNT_IN_CART:
    return {
			...state,
			coffees: state.coffees.map(i => {
        if (i.id === action.payload.coffeeId)
					return {
						...i,
						amount: i.amount + 1
					}

        return i
      })
    }

  case ActionType.REMOVE_FROM_CART:
    return {
			...state,
      coffees: state.coffees.filter(i => i.id !== action.payload.coffeeId)
    }

  case ActionType.SAVE_DELIVERY_ADDRESS:
    return {
			...state,
      deliveryAddress: action.payload.deliveryAddress
    }

  default:
    return state
  }
}

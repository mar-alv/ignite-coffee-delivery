import { ActionTypes } from './actions'
import { Coffee, DeliveryAddress, PaymentMethod } from '@interfaces'
import { produce } from 'immer'

interface CoffeeState {
  coffees: Coffee[]
  deliveryAddress: DeliveryAddress | null
  paymentMethod: PaymentMethod | null
}

export function coffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
  case ActionTypes.ADD_TO_CART: {
    const { id, amount } = action.payload.coffee

    const isCoffeeAlreadyInTheCart = state.coffees.some(coffee =>
      coffee.id === id
    )

    if (isCoffeeAlreadyInTheCart) {
      return produce(state, (draft) => {
        draft.coffees.map(coffee => {
          if (coffee.id === id)
            coffee.amount += amount

          return coffee
        })
      })
    }

    return produce(state, (draft) => {
      draft.coffees.push(action.payload.coffee)
    })
  }
  case ActionTypes.CHOOSE_PAYMENT_METHOD: {
    return produce(state, (draft) => {
      draft.paymentMethod = action.payload.paymentMethod
    })
  }
  case ActionTypes.CONFIRM_DELIVERY: {
    return produce(state, (draft) => {
      draft.coffees = []
      // draft.deliveryAddress = null
      // draft.paymentMethod = null
    })
  }
  case ActionTypes.DECREASE_AMOUNT_IN_CART: {
    return produce(state, (draft) => {
      draft.coffees.map(coffee => {
        if (coffee.id === action.payload.coffeeId && coffee.amount && coffee.amount > 1)
          coffee.amount -= 1

        return coffee
      })
    })
  }
  case ActionTypes.INCREASE_AMOUNT_IN_CART: {
    return produce(state, (draft) => {
      draft.coffees.map(coffee => {
        if (coffee.id === action.payload.coffeeId && coffee.amount)
          coffee.amount += 1

        return coffee
      })
    })
  }
  case ActionTypes.REMOVE_FROM_CART: {
    return produce(state, (draft) => {
      draft.coffees = draft.coffees.filter(coffee => coffee.id !== action.payload.coffeeId)
    })
  }
  case ActionTypes.SAVE_DELIVERY_ADDRESS: {
    return produce(state, (draft) => {
      draft.deliveryAddress = action.payload.deliveryAddress
    })
  }
  default:
    return state
  }
}

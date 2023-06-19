import { Coffee, DeliveryAddress, PaymentMethod } from '@interfaces'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  CHOOSE_PAYMENT_METHOD = 'CHOOSE_PAYMENT_METHOD',
  DECREASE_AMOUNT_IN_CART = 'DECREASE_AMOUNT_IN_CART',
  INCREASE_AMOUNT_IN_CART = 'INCREASE_AMOUNT_IN_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  SAVE_DELIVERY_ADDRESS = 'SAVE_DELIVERY_ADDRESS'
}

export function addToCartAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function choosePaymentMethodAction(paymentMethod: PaymentMethod) {
  return {
    type: ActionTypes.CHOOSE_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  }
}

export function decreaseAmountInCartAction(coffeeId: number) {
  return {
    type: ActionTypes.DECREASE_AMOUNT_IN_CART,
    payload: {
      coffeeId,
    },
  }
}

export function increaseAmountInCartAction(coffeeId: number) {
  return {
    type: ActionTypes.INCREASE_AMOUNT_IN_CART,
    payload: {
      coffeeId,
    },
  }
}

export function removeFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function saveDeliveryAddressAction(deliveryAddress: DeliveryAddress) {
  return {
    type: ActionTypes.SAVE_DELIVERY_ADDRESS,
    payload: {
      deliveryAddress,
    },
  }
}

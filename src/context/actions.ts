import { Coffee, DeliveryAddress, PaymentMethod } from '@interfaces'
import { Action } from './reducer'

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  CHOOSE_PAYMENT_METHOD = 'CHOOSE_PAYMENT_METHOD',
  CONFIRM_DELIVERY = 'CONFIRM_DELIVERY',
  DECREASE_AMOUNT_IN_CART = 'DECREASE_AMOUNT_IN_CART',
  INCREASE_AMOUNT_IN_CART = 'INCREASE_AMOUNT_IN_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  SAVE_DELIVERY_ADDRESS = 'SAVE_DELIVERY_ADDRESS'
}

export function addToCartAction(coffee: Coffee): Action {
  return {
    type: ActionType.ADD_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function confirmDeliveryAction(): Action {
  return {
    type: ActionType.CONFIRM_DELIVERY,
  }
}

export function choosePaymentMethodAction(paymentMethod: PaymentMethod): Action {
  return {
    type: ActionType.CHOOSE_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  }
}

export function decreaseAmountInCartAction(coffeeId: number): Action {
  return {
    type: ActionType.DECREASE_AMOUNT_IN_CART,
    payload: {
      coffeeId,
    },
  }
}

export function increaseAmountInCartAction(coffeeId: number): Action {
  return {
    type: ActionType.INCREASE_AMOUNT_IN_CART,
    payload: {
      coffeeId,
    },
  }
}

export function removeFromCartAction(coffeeId: number): Action {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function saveDeliveryAddressAction(deliveryAddress: DeliveryAddress): Action {
  return {
    type: ActionType.SAVE_DELIVERY_ADDRESS,
    payload: {
      deliveryAddress,
    },
  }
}

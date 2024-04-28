import { Coffee } from '@interfaces'

export const paymentUtils = {
  getCoffeesPrice(coffees: Coffee[]) {
    return coffees.reduce((previousPrice, currentCoffee) => {
			return previousPrice += (currentCoffee.amount ? currentCoffee.amount : 1) *
															(currentCoffee.price ? currentCoffee.price : 1)
		},0)
  },
	getFeePrice(coffeesPrice: number) {
    return coffeesPrice * 10 / 100
  },
	getTotalPrice(coffeesPrice: number, feePrice: number) {
    return coffeesPrice + feePrice
  }
}

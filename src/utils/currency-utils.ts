export const currencyUtils = {
  toBrazillianCurrency(value: number) {
    return `R$ ${value.toFixed(2).toString().replace('.', ',')}`
  }
}

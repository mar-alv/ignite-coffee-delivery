export const stringUtils = {
  toCapitalize(value: string | undefined) {
    return value?.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
  },
  isCepValid(value: string | undefined) {
    return value?.length === 8
  }
}

import * as Common from "./"

export const getPrice = edges => {
  const lang = Common.Func.getLangKey()

  const currencyCode = lang === "ja" ? "JPY" : "USD"
  const minimumFractionDigits = currencyCode === "USD" ? 2 : 0

  const edge = edges.find(n => {
    const node = n.node

    if (node) {
      return node.price.currencyCode === currencyCode
    } else {
      return n.price.currencyCode === currencyCode
    }
  })
  if (typeof window === `undefined`) return
  const price = Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: minimumFractionDigits,
    style: "currency",
  }).format(edge.node ? edge.node.price.amount : edge.price.amount)

  return price
}

export const changeFormatToPrice = (value, currencyCode) => {
  const minimumFractionDigits = currencyCode === "USD" ? 2 : 0
  const price = Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: minimumFractionDigits,
    style: "currency",
  }).format(value)
  return price
}

const getSkus = () => {
  let localCart
  try {
    localCart = JSON.parse(localStorage.getItem("cart"))
  } catch (err) {
    console.error(err.message)
  }

  if (!localCart || Object.keys(localCart).length === 0) return new Map()

  // object ->  {id: 1, name: 'me' }

  // tmp -> [ ['id', 1], ['name', 'me'] ]

  const map = new Map(Object.entries(localCart))

  return map
}
const write = skus => {
  try {
    let tmp = skus.entries(skus)

    tmp = Array.from(tmp)
    tmp = tmp.map(([k, v]) => ({ [k]: v }))
    const result = tmp.reduce((l, r) => Object.assign(l, r), {})
    localStorage.setItem("cart", JSON.stringify(result))
  } catch (err) {
    console.error(err)
  }
}
const initialState = {
  skus: getSkus(),
  timestamp: 0,
}
export const BagReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDBAG":
      if (typeof window !== `undefined`) {
        const skus = state.skus
        const item = skus.get(action.sku.id)
        if (!item) {
          skus.set(action.sku.id, {
            sku: action.sku,
            quantity: action.quantity,
          })
        } else {
          item.quantity++
        }
        write(skus)
        return Object.assign({}, state, {
          skus: skus,
          timestamp: new Date().getTime(),
        })
      } else {
        return null
      }
    case "REMOVEBAG":
      if (typeof window !== `undefined`) {
        const skus = state.skus
        skus.delete(action.sku.id)

        write(skus)

        return Object.assign({}, state, {
          skus: skus,
          timestamp: new Date().getTime(),
        })
      } else {
        return null
      }
    default:
      return state
  }
}

export default BagReducer

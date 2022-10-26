export const getData = async () => {
  const response = await fetch('https://jibs.my.id/api/harga_komoditas');
  const result = await response.json()

  return Object.keys(result.national_commodity_price) ?? {}
}

export const getAll = async () => {
  const response = await fetch('https://jibs.my.id/api/harga_komoditas').then(response => response.json())

  const province = "Kepulauan Riau"

  const data = Object.entries(response?.national_commodity_price)
  .map(item => {
    const [key, values] = item;

    return {
      name: key,
      comodity: values.find(x => x.name === province)
    }
  })

  return JSON.stringify(data)
}


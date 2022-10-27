const API_URL = 'https://jibs.my.id/api/harga_komoditas'

export const getData = async () => {
  const response = await fetch(API_URL);
  const result = await response.json()

  return Object.keys(result.national_commodity_price) ?? {}
}

export const getAllProvince = async (): string[] => {
  const response = await fetch(API_URL).then(response => response.json())

  const result =
    Object.entries(response?.national_commodity_price)
      .map(item => {
        const [, values] = item

        return [
          ...values.map(x => x.name)
        ]
      }).flat(1)

  const provinces = [...new Set<string[]>(result)]

  localStorage.setItem('provinces', JSON.stringify(provinces))

  return provinces
}

export const getAll = async () => {
  const response = require('../../data/comodity.json')
  //const response = await fetch(API_URL).then(response => response.json())

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


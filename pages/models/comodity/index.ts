const API_URL = 'https://jibs.my.id/api/harga_komoditas'

export const getProvince = () => {
  const response = require('../../data/province.json')

  return response
}

export const getAllProvince = async (): Promise<string[]> => {
  const response: APIResponse = await fetch(API_URL).then(response => response.json())

  const result =
    Object.entries(response?.national_commodity_price)
      .map(item => {
        const [, values] = item

        return [
          ...values.map(x => x.name)
        ]
      }).flat(1)

  const provinces = [...new Set<string[]>(result)]

  return provinces
}

export const getAll = async () => {
  const response: APIResponse = require('../../data/comodity.json')
  //const response = await fetch(API_URL).then(response => response.json())

  const province = "Sumatera Utara";

  const data = Object.entries(response?.national_commodity_price)
    .map(item => {
      const [key, values] = item;

      return {
        name: key,
        comodity: values.find(x => x.name === province)
      }
    })

  return data
}


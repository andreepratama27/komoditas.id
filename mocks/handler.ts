import { rest } from 'msw'
import result from './data.json'

export const handlers = [
  rest.get('/comodities/:province', (_req, res, ctx) => {
    const province = _req.params.province ?? "";
    const response = Object.entries(result?.national_commodity_price)
      .map(item => {
        const [key, values] = item;

        return {
          name: key,
          comodity: values.find(x => x.name === province) ?? {}
        }
      })
    
    return res(
      ctx.status(200),
      ctx.json(response)
    )
  }),
  
  rest.get('/provinces', (_req, res, ctx) => {
    const response =
      Object.entries(result.national_commodity_price)
      .map(item => {
        const [, values] = item

        return [
          ...values.map(x => x.name)
        ]
      }).flat(1)

    const provinces = [...new Set<string[]>(response)]

    return res(
      ctx.status(200),
      ctx.json(provinces),
    )
  })
]

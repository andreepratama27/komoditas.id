import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../data/comodity.json'

interface Comodity {
  value: string;
  name: string;
  display: string;
  id: string;
}

interface APIResponse {
  national_commodity_price: Record<string, Comodity[]>
}

const handler = async (req: NextApiRequest, res: NextApiResponse<string[]>) => {
  try {
    //const response = await fetch('https://jibs.my.id/api/harga_komoditas')
    //const result = await response.json()
    const result = data;

    return res
      .status(200)
      .json(Object.keys(result.national_commodity_price))
  } catch (err) {
    throw err
  }
}

export default handler

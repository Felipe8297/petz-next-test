import type { NextApiRequest, NextApiResponse } from 'next'
import { get, pokeInstance } from '@/services/http'
import { PokemonResponse } from '@/usecases/pokemon'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PokemonResponse>
) {
    const { data } = await get<PokemonResponse>({ url: '/pokemon?limit=150', instance: pokeInstance })
    res.status(200).json(data)
}

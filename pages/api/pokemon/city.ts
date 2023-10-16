import type { NextApiRequest, NextApiResponse } from 'next'
import { get, pokeInstance } from '@/services/http'
import { PokemonCityResponse } from '@/usecases/pokemon'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PokemonCityResponse>
) {
    if (req.method !== 'POST') {
        res.status(405).end()
        return
    }
    if (req.headers['content-type']?.toLowerCase() !== "application/json" && !req.body.hasOwnProperty("region")) {
        res.status(400).end()
        return
    }

    const { data } = await get<PokemonCityResponse>({ url: `/region/${req.body.region}`, instance: pokeInstance })
    res.status(200).json(data)
}

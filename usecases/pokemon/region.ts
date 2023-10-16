import { get } from '@/services/http'
import { PokemonResponse } from '.'

export const getPokemonRegion = async () => {
    const { data } = await get<PokemonResponse>({ url: '/pokemon/region' })
    return data
}

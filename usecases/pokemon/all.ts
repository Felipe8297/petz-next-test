import { get } from '@/services/http'
import { PokemonResponse } from '.'

export const getAllPokemon = async () => {
    const { data } = await get<PokemonResponse>({ url: '/pokemon/all' })
    return data
}

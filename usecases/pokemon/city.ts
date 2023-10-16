import { post } from '@/services/http'
import { PokemonCityResponse } from '.'

export const getPokemonCity = async (region: string) => {
    const { data } = await post<PokemonCityResponse>({ url: '/pokemon/city', data: { region } })
    return data
}

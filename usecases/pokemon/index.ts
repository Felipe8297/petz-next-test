export type PokemonMeta = {
    name: string,
    url: string
}

export type PokemonResponse = {
    count: number,
    next: string,
    previous: null,
    results: PokemonMeta[]
}

export type PokemonName = {
    language: PokemonMeta,
    name: string
}

export type PokemonCityResponse = {
    id: number,
    locations: PokemonMeta[],
    main_generation: PokemonMeta,
    name: string,
    names: PokemonName[],
    pokedexes: PokemonMeta[],
    version_groups: PokemonMeta[]
}
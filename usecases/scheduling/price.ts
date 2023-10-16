export const getPokemonUnitValue = () => 70

export const getTaxesValue = (subtotal: number) => (subtotal / 100) * 3

export const calculatePrice = (subtotal: number) => subtotal + getTaxesValue(subtotal)

export const calculateSubtotal = (pokemonUnits: number) => getPokemonUnitValue() * pokemonUnits

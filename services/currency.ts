export const format = (price: number) => {
    const currency = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    })

    return currency.format(price)
}
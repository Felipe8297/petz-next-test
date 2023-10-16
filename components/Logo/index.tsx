import { useState, useEffect } from 'react'
import Image from 'next/image'
import * as S from './styles'

export default function Logo() {

    const [open, setOpen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 5000)
    }, [])

    return (
        <S.Logo open={open}>
            <Image
                src="/images/white-pokeball.svg"
                alt="Centro Pokémon"
                width={34}
                height={34}
            />
            <S.TextContent>
                <S.Text>Centro Pokémon</S.Text>
            </S.TextContent>
        </S.Logo>
    )
}

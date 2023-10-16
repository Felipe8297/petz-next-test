import React from 'react'
import * as S from './styles'

type Props = {
    children: React.ReactNode,
}

export default function Title({ children }: Props) {
    return (
        <S.Title>
            {children}
        </S.Title>
    )
}

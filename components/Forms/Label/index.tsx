import React from 'react'
import * as S from './styles'

type Props = {
    children: React.ReactNode
}

export default function Label({ children }: Props) {
    return (
        <S.Label>{children}</S.Label>
    )
}

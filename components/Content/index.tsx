import React from 'react'
import * as S from './styles'

type Props = {
    children: React.ReactNode,
    isSmall?: boolean
}

export default function Content({ isSmall = false, children }: Props) {
    return (
        <S.Content isSmall={isSmall}>
            {children}
        </S.Content>
    )
}

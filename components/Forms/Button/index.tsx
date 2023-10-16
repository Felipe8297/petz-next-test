import React from 'react'
import * as S from './styles'

type Props = {
    children: React.ReactNode,
    isDisabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ onClick, isDisabled = false, children }: Props) {
    return (
        <S.Button onClick={onClick} disabled={isDisabled}>{children}</S.Button>
    )
}
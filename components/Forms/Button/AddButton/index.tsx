import React from 'react'
import * as S from './styles'

type Props = {
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    children: React.ReactNode,
}

export default function AddButton({ children, onClick }: Props) {
    return (
        <S.AddButton onClick={onClick}>{children} +</S.AddButton>
    )
}
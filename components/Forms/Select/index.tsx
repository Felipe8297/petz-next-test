import React from 'react'
import { Label } from '..'
import * as S from './styles'

type Props = {
    children: React.ReactNode,
    label?: String,
    value?: string,
    isDisabled?: boolean,
    onChange?: React.ChangeEventHandler<HTMLSelectElement>,
}

export default function Select({ label, value, onChange, isDisabled = false, children }: Props) {
    return (
        <S.Container>
            {label && <Label>{label}</Label>}
            <S.SelectContainer isDisabled={isDisabled}>
                <S.Select value={value} onChange={onChange} disabled={isDisabled}>
                    {children}
                </S.Select>
                <S.Icon>{'>'}</S.Icon>
            </S.SelectContainer>
        </S.Container>
    )
}

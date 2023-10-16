import React from 'react'
import { Label } from '..'
import * as S from './styles'

type Props = {
    label: String,
    placeholder: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export default function Input({ label, onChange, placeholder }: Props) {
    return (
        <S.Container>
            <Label>{label}</Label>
            <S.Input type="text" onChange={onChange} placeholder={placeholder} />
        </S.Container>
    )
}

import styled from 'styled-components'
import { colors, weights, sizes, rounds } from '@/utils/designTokens'

type ButtonProps = {
    disabled: boolean
}

export const Button = styled.button<ButtonProps>`
    background: ${colors.red};
    color: ${colors.white};
    font-size: ${sizes.body2};
    font-weight: ${weights.extrabold};
    padding: 13px 9px;
    border-radius: ${rounds.large};
    border: 0;
    cursor: pointer;
    opacity: ${({ disabled }) => disabled ? '.5' : '1'};
`
import styled from 'styled-components'
import { colors, sizes, weights, rounds } from '@/utils/designTokens'

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    background: ${colors.lightred};
    border: 1px ${colors.salmon} solid;
    border-radius: ${rounds.small};
    padding: 20px 21px 34px;
    text-align: center;
    margin: 120px 0;

    a {
        text-decoration: none;
    }
`

export const Title = styled.div`
    font-size: ${sizes.title2};
    font-weight: ${weights.extrabold};
`

export const Description = styled.div`
    color: ${colors.grey};
    font-size: ${sizes.body2};
`

export const Icon = styled.div``
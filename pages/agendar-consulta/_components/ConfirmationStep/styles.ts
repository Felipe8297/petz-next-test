import styled from 'styled-components'
import { sizes, weights, colors } from '@/utils/designTokens'

export const ConfirmationStep = styled.div`
    border-top: 1px solid ${colors.grey};
    padding: 32px 0;
`

export const Detail = styled.div`
    font-size: ${sizes.body2};
    color: ${colors.grey};
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 32px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Warning = styled.div`
    font-size: ${sizes.min};
`

export const Total = styled.div`
    font-weight: ${weights.bold};
    font-size: ${sizes.larger};
    color: ${colors.darkgrey};
`
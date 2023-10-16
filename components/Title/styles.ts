import styled from 'styled-components'
import { weights, sizes, colors } from '@/utils/designTokens'

export const Title = styled.h1`
    font-size: ${sizes.larger};
    font-weight: ${weights.bold};
    color: ${colors.darkgrey};
    margin-top: 32px;
    text-align: center;
    padding: 0 40px;
`
import styled from 'styled-components'
import { colors, sizes, weights } from '@/utils/designTokens'

export const Label = styled.label`
    color: ${colors.darkgrey};
    font-size: ${sizes.highlight};
    margin-bottom: 8px;
    font-weight: ${weights.extrabold};
    display: block;
`
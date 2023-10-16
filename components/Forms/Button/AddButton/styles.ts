import styled from 'styled-components'
import { colors, weights, sizes, rounds } from '@/utils/designTokens'

export const AddButton = styled.div`
    color: ${colors.darkgrey};
    font-size: ${sizes.highlight};
    font-weight: ${weights.extrabold};
    padding: 13px 9px;
    border-radius: ${rounds.large};
    display: inline-block;
    border: 1px solid ${colors.darkgrey};
    cursor: pointer;
`
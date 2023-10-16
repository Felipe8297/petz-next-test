import styled from 'styled-components'
import { colors, sizes } from '@/utils/designTokens'

export const Footer = styled.div`
    padding: 24px 0 31px;
    font-size: ${sizes.body2};
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.darkgrey};
`
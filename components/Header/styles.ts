import styled from 'styled-components'
import { colors, sizes, weights } from '@/utils/designTokens'

export const Header = styled.div`
    background: ${colors.red};
    color: ${colors.white};
    padding: 32px 106px 60px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    line-height: 14.52px;
`

export const Title = styled.div`
    font-size: ${sizes.title1};
    font-weight: ${weights.extrabold};
    line-height: 38.73px;
`

export const Breadcrumbs = styled.div`
    font-weight: ${weights.extrabold};
    font-size: ${sizes.highlight};
`

export const Description = styled.div`
    font-weight: ${weights.normal};
    font-size: ${sizes.body2};
`
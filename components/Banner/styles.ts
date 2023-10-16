import styled from 'styled-components'
import { weights, sizes, colors } from '@/utils/designTokens'

export const Banner = styled.div`
    background: url('/images/pokemon-hero.jpg') no-repeat center;
    background-size: cover;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Text = styled.div`
    width: 509px;
    line-height: 38.73px;
    font-size: ${sizes.title1};
    font-weight: ${weights.extrabold};
    color: ${colors.white};
`
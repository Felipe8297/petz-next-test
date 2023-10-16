import styled from 'styled-components'
import { colors, weights, sizes } from '@/utils/designTokens'

export const TeamStep = styled.div`
    display: block;
    margin-bottom: 46px;
`

export const Description = styled.div`
    color: ${colors.grey};
    font-weight: ${weights.medium};
    font-size: ${sizes.highlight};
    margin-bottom: 16px;
`

export const Row = styled.div`
    display: flex;
    gap: 38px;
    align-items: center;
    margin-bottom: 32px;
`

export const PokemonNumber = styled.div`
    color: ${colors.darkgrey};
    font-weight: ${weights.extrabold};
    font-size: ${sizes.highlight};
`
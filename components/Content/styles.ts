import styled from 'styled-components'
import { weights, sizes, colors } from '@/utils/designTokens'

type ContentProps = {
    isSmall: boolean
}

export const Content = styled.div<ContentProps>`
    width: ${({ isSmall }) => isSmall ? '408px' : '548px'};
    margin: 34px auto 72px;
    color: ${colors.black};

    h1,
    h2,
    p {
        margin-bottom: 28px;
    }

    h2,
    p {
        font-weight: ${weights.medium};
    }

    h1 {
        font-weight: ${weights.bold};
        font-size: ${sizes.title3};
        line-height: 25.2px;
    }

    h2 {
        font-size: ${sizes.body1};
        line-height: 22.4px;
    }

    p {
        font-size: ${sizes.body2};
        line-height: 19.6px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`
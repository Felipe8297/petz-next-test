import styled from 'styled-components'
import { colors, sizes, weights, rounds } from '@/utils/designTokens'

export const NavigationBar = styled.div`
    padding: 22px 83px;
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
    }
`

export const Menu = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
    height: 100%;

    li {
        a {
            color: ${colors.black};
            display: inline-block;
            border-radius: ${rounds.large};
            padding: 13px 0;
        }
        
        &:last-child {
            a {
                padding: 13px 24px;
                background: ${colors.red};
                font-size: ${sizes.body2};
                font-weight: ${weights.extrabold};
                color: ${colors.white};
            }
        }
    }
`
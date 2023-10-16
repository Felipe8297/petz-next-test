import styled from 'styled-components'
import { sizes, colors, rounds } from '@/utils/designTokens'

type LogoProps = {
    open: boolean
}

export const Logo = styled.div<LogoProps>`
    display: flex;
    background: ${colors.red};
    gap: 20px;
    padding: 14px 28px 14px 15px;
    align-items: center;
    border-radius: ${rounds.large};
    box-sizing: border-box;
    overflow: hidden;
    width: ${({ open }) => open ? '259px' : '64px'};
    transition: .3s width;

    &:hover {
        width: 259px;
    }
`

export const TextContent = styled.div`
    position: relative;
`

export const Text = styled.div`
    position: absolute;
    top: -9px;
    left: 0;
    width: 165px;
    font-size: ${sizes.title2};
    color: ${colors.white}
`

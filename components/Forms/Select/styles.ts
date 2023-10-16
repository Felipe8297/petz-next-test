import styled from 'styled-components'
import { weights, colors, sizes, rounds } from '@/utils/designTokens'

type SelectContainerProps = {
    isDisabled: boolean
}

export const SelectContainer = styled.div<SelectContainerProps>`
    border: 1px solid ${colors.grey};
    border-radius: ${rounds.small};
    font-size: ${sizes.body2};
    height: 44px;
    box-sizing: border-box;
    position: relative;
    opacity: ${({ isDisabled }) => isDisabled ? '.5' : '1'};
`

export const Select = styled.select`
    background: transparent;
    border: 0;
    appearance: none;
    color: ${colors.grey};
    width: 100%;
    padding: 13px 14px;

    &:focus {
        outline: 0;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Icon = styled.div`
    color: ${colors.grey};
    font-size: ${sizes.title1};
    line-height: 38.73px;
    font-weight: ${weights.light};
    -webkit-font-smoothing: antialiased;
    transform: rotate(90deg);
    position: absolute;
    top: 3px;
    right: 5px;
    z-index: -5;
`
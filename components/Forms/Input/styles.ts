import styled from 'styled-components'
import { colors, sizes, rounds } from '@/utils/designTokens'

export const Input = styled.input`
    padding: 13px 14px;
    border: 1px solid ${colors.grey};
    border-radius: ${rounds.small};
    font-size: ${sizes.body2};
    color: ${colors.grey};
`

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
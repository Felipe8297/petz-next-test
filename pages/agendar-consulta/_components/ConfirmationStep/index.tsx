import { useContext } from 'react'
import { useRouter } from 'next/router'
import { ScheduleContext, initialScheduleState } from '@/providers/ScheduleProvider'
import { Button } from '@/components/Forms'
import { format } from '@/services/currency'
import { calculatePrice, calculateSubtotal, getTaxesValue, getPokemonUnitValue } from '@/usecases/scheduling/price'
import { createSchedule, isScheduleValidated } from '@/usecases/scheduling/create'
import * as S from './styles'

export default function ConfirmationStep() {
    const router = useRouter()
    const scheduleContent = useContext(ScheduleContext)
    const teamTotal = scheduleContent?.schedule.team.length ?? 1
    const subtotal = calculateSubtotal(teamTotal)

    const scheduleClickHandler = async () => {
        try {
            const data = await createSchedule(scheduleContent?.schedule ?? initialScheduleState)
            const pathname = '/agendar-consulta/sucesso'

            router.push({
                pathname,
                query: data
            }, pathname)
        } catch (error) {
            const pathname = '/agendar-consulta/falha'
            router.push({
                pathname,
                query: { message: 'Houve um erro ao tentar criar a agenda' }
            }, pathname)
        }
    }

    return (
        <S.ConfirmationStep>
            <S.Detail>
                <S.Row>
                    <div>
                        Número de pokémons a serem atendidos:
                    </div>
                    <div>
                        0{teamTotal}
                    </div>
                </S.Row>
                <S.Row>
                    <div>
                        Atendimento unitário por pokémon:
                    </div>
                    <div>
                        {format(getPokemonUnitValue())}
                    </div>
                </S.Row>
                <S.Row>
                    <div>
                        Subtotal:
                    </div>
                    <div>
                        {format(subtotal)}
                    </div>
                </S.Row>
                <S.Row>
                    <div>
                        Taxa geracional*:
                    </div>
                    <div>
                        {format(getTaxesValue(subtotal))}
                    </div>
                </S.Row>
                <S.Warning>
                    *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%
                </S.Warning>
            </S.Detail>
            <S.Row>
                <S.Total>Valor Total: {format(calculatePrice(subtotal))}</S.Total>
                <Button
                    onClick={scheduleClickHandler}
                    isDisabled={!isScheduleValidated(scheduleContent?.schedule ?? initialScheduleState)}
                >
                    Concluir Agendamento
                </Button>
            </S.Row>
        </S.ConfirmationStep>
    )
}

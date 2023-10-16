import { useContext, useState, useEffect, useCallback } from 'react'
import { ScheduleContext } from '@/providers/ScheduleProvider'
import { getSchedulingDate } from '@/usecases/scheduling/date'
import { getSchedulingTime } from '@/usecases/scheduling/time'
import { Select } from '@/components/Forms'
import * as S from './styles'

export default function ScheduleStep() {
    const scheduleContent = useContext(ScheduleContext)
    const [dates, setDates] = useState<string[]>([])
    const [times, setTimes] = useState<string[]>([])

    const fetchDates = async () => {
        const data = await getSchedulingDate()
        setDates(data)
    }

    const fetchTimes = useCallback(async () => {
        const data = await getSchedulingTime(scheduleContent?.schedule.scheduleDate!)
        setTimes(data)
    }, [scheduleContent?.schedule.scheduleDate])

    const dateChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        scheduleContent?.setSchedule({
            ...scheduleContent.schedule,
            scheduleDate: e.target.value
        })
    }

    const timeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        scheduleContent?.setSchedule({
            ...scheduleContent.schedule,
            scheduleTime: e.target.value
        })
    }

    useEffect(() => {
        fetchDates()
    }, [])

    useEffect(() => {
        if (!scheduleContent?.schedule.scheduleDate) return
        fetchTimes()
    }, [fetchTimes, scheduleContent?.schedule.scheduleDate])

    return (
        <S.ScheduleStep>
            <S.Row>
                <Select label="Data para atendimento" onChange={dateChangeHandler}>
                    <option>Selecione uma data</option>
                    {dates.map(date =>
                        <option key={date}>{date}</option>
                    )}
                </Select>
                <Select
                    label="Horário de atendimento"
                    onChange={timeChangeHandler}
                    isDisabled={!scheduleContent?.schedule.scheduleDate}
                >
                    <option>Selecione um horário</option>
                    {times.map(time =>
                        <option key={time}>{time}</option>
                    )}
                </Select>
            </S.Row>
        </S.ScheduleStep>
    )
}

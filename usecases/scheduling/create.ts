import { ScheduleContextProps } from '@/providers/ScheduleProvider'
import { post } from '@/services/http'
import { ScheduleResponse } from '.'

export const createSchedule = async (props: ScheduleContextProps) => {
    const { data } = await post<ScheduleResponse>({ url: '/scheduling/create', data: props })
    return data
}

export const isScheduleValidated = ({
    name,
    lastname,
    region,
    city,
    team,
    scheduleDate,
    scheduleTime
}: ScheduleContextProps) => {
    const fields = [
        name,
        lastname,
        region,
        city,
        ...team,
        scheduleDate,
        scheduleTime
    ]

    return fields.every(field => field !== null)
}
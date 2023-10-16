import React, { useState, createContext, useMemo, SetStateAction, Dispatch } from 'react'

export type ScheduleContextProps = {
    name: string | null,
    lastname: string | null,
    region: string | null,
    city: string | null,
    team: Array<string | null>,
    scheduleDate: string | null,
    scheduleTime: string | null,
}

type ValueProps = {
    schedule: ScheduleContextProps,
    setSchedule: Dispatch<SetStateAction<ScheduleContextProps>>
}

type Props = {
    children: React.ReactNode
}

export const initialScheduleState = {
    name: null,
    lastname: null,
    region: null,
    city: null,
    team: [null],
    scheduleDate: null,
    scheduleTime: null
}

export const ScheduleContext = createContext<ValueProps | null>(null)

export default function ScheduleProvider({ children }: Props) {

    const [schedule, setSchedule] = useState<ScheduleContextProps>(initialScheduleState)

    const value = useMemo(
        () => ({ schedule, setSchedule }),
        [schedule]
    )

    return (
        <ScheduleContext.Provider value={value}>
            {children}
        </ScheduleContext.Provider>
    )
}
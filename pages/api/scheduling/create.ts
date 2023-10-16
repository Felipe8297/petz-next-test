import type { NextApiRequest, NextApiResponse } from 'next'
import { ScheduleResponse } from '@/usecases/scheduling'

const haveAllKeys = (props = {}) => {
    const validate = [
        props.hasOwnProperty('name'),
        props.hasOwnProperty('lastname'),
        props.hasOwnProperty('region'),
        props.hasOwnProperty('city'),
        props.hasOwnProperty('team'),
        props.hasOwnProperty('scheduleDate'),
        props.hasOwnProperty('scheduleTime'),
    ]
    return validate.every(field => field)
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ScheduleResponse>
) {
    if (req.method !== 'POST') {
        res.status(405).end()
        return
    }

    if (req.headers['content-type']?.toLowerCase() !== "application/json" && !haveAllKeys(req.body)) {
        res.statusMessage = 'Não foi possível criar o agendamento'
        res.status(400).end()
        return
    }

    res.status(200).json({
        date: req.body.scheduleDate,
        time: req.body.scheduleTime,
        pokemonUnits: req.body.team.length
    })
}
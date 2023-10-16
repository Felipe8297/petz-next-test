import { get } from '@/services/http'

export const getSchedulingDate = async () => {
    const { data } = await get<string[]>({ url: '/scheduling/date' })
    return data
}

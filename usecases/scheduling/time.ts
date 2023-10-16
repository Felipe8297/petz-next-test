import { post } from '@/services/http'

export const getSchedulingTime = async (date: string) => {
    const { data } = await post<string[]>({ url: '/scheduling/time', data: { date } })
    return data
}

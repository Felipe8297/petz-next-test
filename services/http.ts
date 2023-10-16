
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const localInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
})

export const pokeInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

type HTTPProps = {
    url: string,
    config?: AxiosRequestConfig<any> | undefined,
    instance?: AxiosInstance,
    data?: any,
}

export const get = <T>({ url, config, instance = localInstance }: HTTPProps) => instance.get<T>(url, config)
export const post = <T>({ url, data, config, instance = localInstance }: HTTPProps) => instance.post<T>(url, data, config)

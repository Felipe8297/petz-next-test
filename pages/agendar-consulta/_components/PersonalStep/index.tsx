import { useContext, useState, useEffect, useCallback } from 'react'
import { ScheduleContext } from '@/providers/ScheduleProvider'
import { Input, Select } from '@/components/Forms'
import { getPokemonRegion } from '@/usecases/pokemon/region'
import { getPokemonCity } from '@/usecases/pokemon/city'
import { PokemonMeta } from '@/usecases/pokemon'
import * as S from './styles'

export default function PersonalStep() {
    const scheduleContent = useContext(ScheduleContext)
    const [regions, setRegions] = useState<PokemonMeta[]>([])
    const [cities, setCities] = useState<PokemonMeta[]>([])

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        scheduleContent?.setSchedule({
            ...scheduleContent.schedule,
            name: e.target.value
        })
    }

    const lastnameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        scheduleContent?.setSchedule({
            ...scheduleContent.schedule,
            lastname: e.target.value
        })
    }

    const regionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        scheduleContent?.setSchedule({
            ...scheduleContent.schedule,
            region: e.target.value
        })
    }

    const fetchRegions = async () => {
        const data = await getPokemonRegion()
        setRegions(data.results)
    }

    const fetchCities = useCallback(async () => {
        const data = await getPokemonCity(scheduleContent?.schedule.region!)
        setCities(data.locations)
    }, [scheduleContent?.schedule.region])

    const cityChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        scheduleContent?.setSchedule({
            ...scheduleContent.schedule,
            city: e.target.value
        })
    }

    useEffect(() => {
        fetchRegions()
    }, [])

    useEffect(() => {
        if (!scheduleContent?.schedule.region) return
        fetchCities()
    }, [fetchCities, scheduleContent?.schedule.region])

    return (
        <S.PersonalStep>
            <S.Row>
                <Input
                    label="Nome"
                    placeholder="Digite seu nome"
                    onChange={nameChangeHandler}
                />
                <Input
                    label="Sobrenome"
                    placeholder="Digite seu sobrenome"
                    onChange={lastnameChangeHandler}
                />
            </S.Row>
            <S.Row>
                <Select label="Região" onChange={regionChangeHandler}>
                    <option>Selecione sua região</option>
                    {regions.map(({ name }) =>
                        <option key={name}>{name}</option>
                    )}
                </Select>
                <Select
                    label="Cidade"
                    onChange={cityChangeHandler}
                    isDisabled={!scheduleContent?.schedule.region}
                >
                    <option>Selecione sua cidade</option>
                    {cities.map(({ name }) =>
                        <option key={name}>{name}</option>
                    )}
                </Select>
            </S.Row>
        </S.PersonalStep>
    )
}

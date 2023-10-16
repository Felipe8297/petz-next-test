import { useState, useEffect, useContext, useCallback } from 'react'
import { ScheduleContext } from '@/providers/ScheduleProvider'
import { Label, Select, AddButton } from '@/components/Forms'
import { PokemonMeta } from '@/usecases/pokemon'
import * as S from './styles'
import { getAllPokemon } from '@/usecases/pokemon/all'

export default function TeamStep() {
    const scheduleContent = useContext(ScheduleContext)
    const [allPokemon, setAllPokemon] = useState<PokemonMeta[]>([])
    const hasTeamCompleted = () => scheduleContent?.schedule.team.length! >= 6

    const addPokemon = () => {
        if (hasTeamCompleted()) return

        scheduleContent?.setSchedule({
            ...scheduleContent.schedule,
            team: [
                ...scheduleContent.schedule.team,
                null
            ]
        })
    }

    const pokemonChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const team = [...scheduleContent?.schedule.team ?? []]

        scheduleContent?.setSchedule({
            ...scheduleContent.schedule,
            team: team.map((pokemon, i) => i === index ? e.target.value : pokemon)
        })
    }

    const fetchAllPokemon = async () => {
        const data = await getAllPokemon()
        setAllPokemon(data.results)
    }

    useEffect(() => {
        fetchAllPokemon()
    }, [])

    return (
        <S.TeamStep>
            <Label>Cadastre seu time</Label>
            <S.Description>Atendemos até 06 pokémons por vez</S.Description>
            {scheduleContent?.schedule.team.map((pokemon, index) =>
                <S.Row key={pokemon + index.toString()}>
                    <S.PokemonNumber>Pokémon 0{index + 1}</S.PokemonNumber>
                    <Select
                        value={scheduleContent?.schedule.team[index] ?? ''}
                        onChange={e => pokemonChangeHandler(e, index)}
                    >
                        <option>Selecione seu pokémon</option>
                        {allPokemon.map(({ name }) =>
                            <option key={name}>{name}</option>
                        )}
                    </Select>
                </S.Row>
            )}

            {!hasTeamCompleted() &&
                <AddButton onClick={() => addPokemon()}>Adicionar novo pokémon ao time...</AddButton>
            }
        </S.TeamStep>
    )
}

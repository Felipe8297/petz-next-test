import { useRouter } from 'next/router'
import NavigationBar from '@/components/NavigationBar'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default function ScheduleSuccess() {
    const router = useRouter()
    const date = router?.query?.date
    const time = router?.query?.time
    const pokemonUnits = router?.query?.pokemonUnits

    return (
        <>
            <NavigationBar />
            <Header
                title="Agendar Consulta"
                description="Recupere seus pokémons em 5 segundos"
                breadcrumbs="Home > Agendar Consulta"
            />
            <Content isSmall>
                <Modal
                    title='Consulta Agendada'
                    description={`Seu agendamento para dia ${date}, às ${time}, para ${pokemonUnits}x pokémons foi realizado com sucesso!`}
                    isSuccess
                />
            </Content>
            <Footer />
        </>
    )
}

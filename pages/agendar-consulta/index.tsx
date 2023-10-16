import NavigationBar from '@/components/NavigationBar'
import ScheduleProvider from '@/providers/ScheduleProvider'
import Header from '@/components/Header'
import Title from '@/components/Title'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import PersonalStep from './_components/PersonalStep'
import TeamStep from './_components/TeamStep'
import ScheduleStep from './_components/ScheduleStep'
import ConfirmationStep from './_components/ConfirmationStep'

export default function Schedule() {
    return (
        <>
            <NavigationBar />
            <Header
                title="Agendar Consulta"
                description="Recupere seus pokémons em 5 segundos"
                breadcrumbs="Home > Agendar Consulta"
            />
            <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
            <Content>
                <ScheduleProvider>
                    <PersonalStep />
                    <TeamStep />
                    <ScheduleStep />
                    <ConfirmationStep />
                </ScheduleProvider>
            </Content>
            <Footer />
        </>
    )
}

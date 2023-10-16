import { useRouter } from 'next/router'
import NavigationBar from '@/components/NavigationBar'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default function ScheduleFail() {
    const router = useRouter()
    const errorMessage = router?.query?.message?.toString() ?? ''

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
                    title='Houve um problema no agendamento'
                    description={errorMessage}
                />
            </Content>
            <Footer />
        </>
    )
}

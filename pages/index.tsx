import NavigationBar from '@/components/NavigationBar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import * as S from './styles'

export default function Home() {
  return (
    <S.Home>
      <NavigationBar />
      <Banner />
      <Footer />
    </S.Home>
  )
}

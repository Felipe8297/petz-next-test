import Link from 'next/link'
import * as S from './styles'
import Logo from '../Logo'

export default function NavigationBar() {
    return (
        <S.NavigationBar>
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div>
                <S.Menu>
                    <li>
                        <Link href="/about">
                            Quem somos
                        </Link>
                    </li>
                    <li>
                        <Link href="/agendar-consulta">
                            Agendar Consulta
                        </Link>
                    </li>
                </S.Menu>
            </div>
        </S.NavigationBar>
    )
}

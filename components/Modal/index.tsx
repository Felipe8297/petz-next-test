import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Forms'
import * as S from './styles'

type Props = {
    title: String,
    description: string,
    isSuccess?: boolean,
}

export default function Modal({ title, description, isSuccess = false }: Props) {
    return (
        <S.Modal>
            <S.Title>{title}</S.Title>
            <S.Icon>
                {isSuccess ?
                    <Image
                        src="/icons/check.svg"
                        alt="Sucesso!"
                        width={38.5}
                        height={38.5}
                    />
                    :
                    <Image
                        src="/icons/warning.svg"
                        alt="Erro!"
                        width={33.6}
                        height={32}
                    />
                }
            </S.Icon>
            <S.Description>{description}</S.Description>
            <Link href='/agendar-consulta'>
                <Button>Fazer Novo Agendamento</Button>
            </Link>
        </S.Modal>
    )
}
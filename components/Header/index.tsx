import * as S from './styles'

type Props = {
    title: String,
    breadcrumbs: String,
    description: String,
}

export default function Header({ title, breadcrumbs, description }: Props) {
    return (
        <S.Header>
            <S.Breadcrumbs>{breadcrumbs}</S.Breadcrumbs>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Header>
    )
}

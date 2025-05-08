import { Header } from '../../components/Header/index'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Container, Title, TitleHighlight, Column } from './styles'

const Feed = () => {
    return(<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
            <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
            <UserInfo name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={25}/>
            <UserInfo name="Venilton FalvoJr" image="https://avatars.githubusercontent.com/u/730492?v=" percentual={50}/>
            <UserInfo name="Camilla Cavalcante" image="https://avatars.githubusercontent.com/u/64323124?v=" percentual={85}/>
            <UserInfo name="Kaynan Oliveira" image="https://avatars.githubusercontent.com/u/167828106?v=" percentual={65}/>
            <UserInfo name="Felipe Silva Aguiar" image="https://avatars.githubusercontent.com/u/37452836?v=" percentual={45}/>
            </Column>
        </Container>
    </>)
}

export { Feed }
import { Header } from '../../components/Header/index'
import { Button } from '../../components/Button'
import banner from '../../assets/banner.png'
import {Container, TitleHighlight, Title, TextContent, BannerImage} from './styles'

const Home = () => {
    return(<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                    <br/>
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title='Começar agora' varient='secondary' />
            </div>
            <BannerImage>
                <img src={banner} alt='banner dio' onClick={() => null}/>
            </BannerImage>
        </Container>
    </>)
}

export { Home }
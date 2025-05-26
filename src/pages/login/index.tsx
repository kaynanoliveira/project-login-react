import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {Container, Title, Row, SubTitleLogin, TitleLogin, Column, Wrapper, CriarText, EsqueciText } from './styles'
import { Header } from '../../components/Header/index'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const navigate = useNavigate()
    const HandleClickEntrar = () => {
        navigate('/feed')
    }

    const HandleClickCriar = () => {
        navigate('/registrar')
    }

    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin> 
                    <form>
                        <Input name='email' placeholder='E-mail' type='email' />
                        <Input name='password' placeholder='Senha' type='password' />
                        <Button title='Entrar' variant='sencondary' onClick={HandleClickEntrar}/>
                    </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={HandleClickCriar}>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }
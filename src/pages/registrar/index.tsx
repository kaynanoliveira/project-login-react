import { Header } from '../../components/Header/index'
import {Container, Title, Row, SubTitle, TitleComecar, Column, Wrapper, FazerLogin, Description } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'


const Registrar = () => {

  const navigate = useNavigate()
      const HandleClickRegistrar = () => {
          navigate('/login')
      }

  return (<>
    <Header />
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleComecar>Comece agora grátis</TitleComecar>
          <SubTitle>Crie sua conta e make the change._</SubTitle>
          <form>
            <Input name='name' placeholder='Nome Completo' type='name' />
            <Input name='email' placeholder='E-mail' type='email' />
            <Input name='password' placeholder='Senha' type='password' />
            <Button title='Criar minha conta' variant='secondary' onClick={HandleClickRegistrar}/>
          </form>
          <Description>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </Description>
          <Row>
              <FazerLogin onClick={HandleClickRegistrar}>Fazer Login</FazerLogin>
          </Row>
        </Wrapper>
      </Column>
    </Container>
    </>
  )
}

export { Registrar }
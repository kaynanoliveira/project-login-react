import { Header } from '../../components/Header/index'
import {Container, Title, Row, SubTitle, TitleComecar, Column, Wrapper, FazerLogin } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MdPerson, MdEmail, MdLock } from 'react-icons/md'
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
            <Input name='name' placeholder='Nome Completo' type='name' leftIcon={<MdPerson />}/>
            <Input name='email' placeholder='E-mail' type='email' leftIcon={<MdEmail />}/>
            <Input name='password' placeholder='Senha' type='password'leftIcon={<MdLock />} />
            <Button title='Criar minha conta' varient='sencondary' onClick={HandleClickRegistrar}/>
          </form>
          <SubTitle>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </SubTitle>
          <Row>
              <FazerLogin>Fazer Login</FazerLogin>
          </Row>
        </Wrapper>
      </Column>
    </Container>
    </>
  )
}

export { Registrar }
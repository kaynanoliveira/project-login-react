import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Wrapper, BuscarInputContainer, Menu, MenuRight, UserPicture, Input } from './styles'
import { IHeader } from './types'

const Header = ({autenticado}: IHeader) => {

    const navigate = useNavigate()
    
    const HandleClickEntrar = () => {
        navigate('/login')
    }

    const HandleClickRegistrar = () => {
        navigate('/registrar')
    }

    const HandleClickHome = () => {
        navigate('/')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img onClick={HandleClickHome} src={logo} alt='logo da dio'/>
                {autenticado ? (<>
                    <BuscarInputContainer>
                     <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                     <Menu>Live Code</Menu>
                     <Menu>Global</Menu>
                   </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? ( 
                    <UserPicture src='https://avatars.githubusercontent.com/u/167828106?v=' />
                ) : (<>
                    <MenuRight as="a" href='#'>Home</MenuRight>
                    <Button title='Entrar' onClick={HandleClickEntrar}/>
                    <Button title='Cadastrar' onClick={HandleClickRegistrar}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
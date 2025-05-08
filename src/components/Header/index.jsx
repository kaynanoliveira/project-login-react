import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'
import { Container, Row, Wrapper, BuscarInputContainer, Menu, MenuRight, UserPicture, Input } from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='logo da dio'/>
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
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title='Entrar'/>
                    <Button title='Cadastrar'/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
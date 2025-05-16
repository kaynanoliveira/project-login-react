import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {Container, Title, Row, SubTitleLogin, TitleLogin, Column, Wrapper, CriarText, EsqueciText } from './styles'
import { Header } from '../../components/Header/index'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'


const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Campo obrigatório!'),
    password: yup.string().min(5, 'No mínimo 5 caracteres').required('Campo obrigatório!'),
  }).required()

const Login = () => {
    const navigate = useNavigate()
    const HandleClickEntrar = () => {
        navigate('/feed')
    }

    const {control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })

    const onSubmit = async (formData) => {
        try{
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`)

            if(data.length === 1){
                navigate('/feed')
                return
            }else{
                alert("Email ou senha inválido!")
            }
            
        }catch{
            alert("Houve um erro")
        }
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
                    <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin> 
                    <form onChange={handleSubmit(onSubmit)}>
                        <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='E-mail' type='email' leftIcon={<MdEmail />}/>
                        <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password'leftIcon={<MdLock />} />
                        <Button title='Entrar' varient='sencondary' onClick={HandleClickEntrar} type='submit'/>
                    </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }
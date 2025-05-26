import {InputContainer, IconContainer, InputText } from './styles'
import { IInput } from './types'

const Input = ({leftIcon, ...rest}: IInput) => {
  return (
    <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <InputText {...rest} />
    </InputContainer>
  )
}

export { Input }
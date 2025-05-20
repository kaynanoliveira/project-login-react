import {InputContainer, IconContainer, InputText } from './styles'

const Input = ({leftIcon, ...rest}) => {
  return (
    <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <InputText {...rest} />
    </InputContainer>
  )
}

export { Input }
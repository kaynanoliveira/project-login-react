import {InputContainer, IconContainer, ErrorText, InputText } from './styles'
import { Controller } from "react-hook-form"

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
    <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <Controller 
      render={({ field }) => <InputText {...field} {...rest}/>}
      name={name}
      control={control}
      />
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input }
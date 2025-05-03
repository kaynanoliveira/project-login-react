import { ButtonContainer } from "./styles";

const Button = ({title, varient='primary', onClick}) => {
  return (
    <ButtonContainer varient={varient} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export {Button}
import { ButtonContainer } from "./styles";
import { IButton } from "./types";

const Button = ({title, variant='primary', onClick}: IButton) => {
  return (
    <ButtonContainer varient={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export {Button}
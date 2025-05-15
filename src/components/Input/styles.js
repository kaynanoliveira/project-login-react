import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #583450;
    margin-bottom: 20px;
    
    display: flex;
    align-items: center;
`
export const IconContainer = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
`
export const ErrorText = styled.p`
    color:rgb(255, 0, 0);
    font-size: 12px;
    margin: 5px 0;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    width: 100%;
    border: 0;
    height: 30px;
    margin-bottom: 0;
`
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 25px;
    background: #202037;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`  

export const Menu = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 13px;
    line-height: 25px;
    margin-right: 12px;
    color: #FFFFFF;
    text-decoration: nome;
`

export const MenuRight = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    margin-right: 12px;
    color: #FFFFFF;
    text-decoration: nome;
`

export const UserPicture = styled.img`
width: 32px;
height: 32px;
border-radius: 22px;
border: 3px solid #4cd964;
` 

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`
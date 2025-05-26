import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 120px; 
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    width: 100%;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 35px;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 20px;
    line-height: 25px;
`

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    color: #E5E044;

    &:hover{
        cursor: pointer;
        opacity: 0.6;
    }   
`
export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    cursor: pointer;
    color:rgb(42, 163, 58);

    &:hover{
        cursor: pointer;
        opacity: 0.6;
    }   
`
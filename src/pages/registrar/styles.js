import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 120px; 
`

export const Wrapper = styled.div`
    max-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: -20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    margin-top: -20px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const TitleComecar = styled.p`
    font-family: 'Open Sans';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    white-space: nowrap;
`

export const SubTitle = styled.p`
    font-family: 'Open Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 8px;
    line-height: 25px;
    white-space: nowrap;
`

export const Description = styled.p`
    font-family: 'Open Sans';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`

export const FazerLogin = styled.p`
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
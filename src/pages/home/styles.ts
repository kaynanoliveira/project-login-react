import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 70px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    width: 400px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    color: #E41050;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #FFFFFF;
`

export const BannerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 480px;
        width: 100%;
        height: auto;
    }
`
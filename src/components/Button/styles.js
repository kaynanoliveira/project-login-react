import {styled, css} from "styled-components";

const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 35px;
    position: relative;
    color: #FFFFFF;
    padding: 3px;
    min-width: 130px;
    width: 100%;
    border: 0;
    margin-right: 5px;

    &:hover{
        cursor: pointer;
        opacity: 0.6;
    }   

    ${({varient})=> varient !== "primary" && css `
        min-width: 167px;
        height: 33px;

        background: #E41050;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
         }
        `
    }
`;

export {ButtonContainer}
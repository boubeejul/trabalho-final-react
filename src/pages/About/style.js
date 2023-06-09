import styled from "styled-components";

export const Container = styled.main`
    margin-top: 50px;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const TextContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h4 {
        font-size: 40px;
    }

    h2 {
        text-align: center;
        font-size: 20px;
    }

    h4::after{
        width: 405px;
    }
`

export const TeamContainer = styled.div`
    margin-top: 50px;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 18%;
        img {
            width: 60%;
            border-radius: 50%;
        }

        h2 {
            font-size: 25px;
        }
    }
`
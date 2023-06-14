import styled from "styled-components";

export const Container = styled.main`
    margin-top: 50px;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
    min-height: calc(100vh - 332.594px);

`


export const TextContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h4 {
        font-size: 40px;
        padding-bottom: 40px;
        text-align: center;
    }

    h4:last-of-type{
        padding-top: 40px;
    }

    h4:last-of-type::after{
        width: 100%;
    }

    h2 {
        line-height: 35px;
        font-size: 20px;
        text-align: justify;
        text-indent: 100px;
    }

    h4::after{
        width: 100%;
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
    padding-bottom: 50px;

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

    @media(max-width: 767px) {
        margin-top: 10px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;
        padding-bottom: 50px;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        img {
            width: 30%;
            border-radius: 50%;
        }

        h2 {
            text-align: center;
            width: 100%;
            font-size: 25px;
        }
    }
    
    
`
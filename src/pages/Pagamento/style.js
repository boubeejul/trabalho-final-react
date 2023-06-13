import styled from "styled-components";

export const Container = styled.main`
    margin-top: 4vh;
    margin-bottom: 4vh;
    min-height: 30vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        margin-top: 6vh;
        width: 7%;
        height: 5vh;
        border: none;
        background-color: #EA4B12;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a {
        color: #000;
        font-weight: bold;
        margin-top: 20px;
    }
`

export const InputsContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    input {
        height: 5vh;
        background-color: #d9d9d9;
        border-radius: 10px;
        border: none;
        display: flex;
        padding-left: 7px;
    }

    h4::after {
        width: 105%;
    }
`

export const Card = styled.div`
    margin: 10px;
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    #card {
        width: 80%;
    }

    #cvv {
        width: 15%;
    }
`

export const Info = styled.div`
    
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        margin: 10px;
        width: 100%;
    }
`
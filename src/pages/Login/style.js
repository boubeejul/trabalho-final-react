import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:  #000;
    width: 100vw;
    height: 100vh;
    padding-bottom: 50px;

    img {
        width: 150px;
        margin-top: 50px;
    }
    
`
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 15px;
    margin-top: 40px;
    
    input {
        margin-top: 36px;
        background-color: #e9e9e9;
        height: 10%;
        width: 60%;
        padding: 20px;
        border: none;
        border-radius: 5px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: #000;
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        margin-top: 40px;
        border-radius: 10px;
        background-color: #EA4B12;
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
        border: none;
        padding: 10px;
    }

    h4 {
        margin-top: 30px;
        font-size: 35px;
        text-align: center;
    }

    @media (min-width: 320px) {
        width: 90%;

        button {
            width: 40%;
        }
    }

    @media (min-width: 768px) {
        width: 60%;

        button {
            width: 30%;
        }
    }

    @media (min-width: 1200px) {
        width: 30%;

        button {
            width: 20%;
        }
    }
`
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:  #000;
    height: 100vh;
    width: 100vw;
    
`
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    height: 60%;
    width: 50%;
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

    

    a {
        margin-top: 45px;
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
        width: 20%;
        height: 6%;
        margin-top: 40px;
        border-radius: 10px;
        background-color: #EA4B12;
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
        border: none;
    }

    button:hover {
        width: 22%;
        s
    }

    h4 {
        margin-top: 30px;
        font-size: 35px;
        text-align: center;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    margin-top: 80px;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 332.594px);

    
    h3 {
        color: #000;
        padding-bottom: 10px;
        font-weight: bolder;
        text-align: center;
    }
    h3::after {
        content: "";
        height: 2px;
        width: 170px;
        display: block;
        background-color: rgb(234, 75, 18);
        margin-top: 5px;
    }   

    @media (max-width: 767px) {
        button {
            width: 20%;
        } 

    }
`

export const ContainerInput = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 40%;

    input {
        padding: 5px;
        padding-left: 20px;
        border-radius: 10px;
        margin-top: 20px;
        background-color: #e9e9e9;
        border: none;
        width: 100%;
        height: 50px;
    }

    form {
        width: 70%;
        margin-bottom: 20px;
        textarea {
            width:100%;
            padding: 15px;
            padding-left: 0px 20px 0px 20px;
            border-radius: 10px;
            margin-top: 20px;
            background-color: #e9e9e9;
            text-align: start;
            border: none;
            height: 179px;
        }

        button {
            margin-top: 50px;
            margin-bottom: 50px;
            background-color: #ea4b12;
            color: #fff;
            width: 40%;
            border-radius: 6px;
            border: none;
            padding: 10px;
        }
    }
    
    @media (max-width: 767px) {

        width: 70%;

        input {
            font-size: 13px;
        }

        button {
            width: 50%;
        }
    }

`

export const MesageInput = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    textarea {
        width:100%;
        padding: 15px;
        padding-left: 0px 20px 0px 20px;
        border-radius: 10px;
        margin-top: 20px;
        background-color: #e9e9e9;
        text-align: start;
        border: none;
        height: 179px;
    }

    @media (max-width: 767px) {

        textarea {
            font-size: 13px;
        }
    }
`

import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
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

    button {
        margin-top: 10px;
        margin-bottom: 50px;
        background-color: #ea4b12;
        color: #fff;
        width: 10%;
        border-radius: 6px;
        border: none;
    }

    button:hover {
        background-color: #ea4b12;
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
    
    
`

export const MesageInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    textarea {
        width:100%;
        padding: 5px;
        padding-left: 0px 20px 0px 20px;
        border-radius: 10px;
        margin-top: 20px;
        background-color: #e9e9e9;
        text-align: start;
        border: none;
        height: 179px;
    }
`

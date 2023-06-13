import styled from "styled-components";

export const Container = styled.main`
    width: 80%;
    margin: auto;
`
export const CostumerInfo = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 55px;
    margin-top: 50px;

    h4 {
        text-align: center;
    }
`

export const PersonalInfo = styled.div`
    width: 60%;
    background-color: #F3F3F3;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    border-radius: 10px;

    span {
        color: rgb(45, 45, 45);

        span {
            font-weight: bold;
        }
    }
    @media (max-width: 767px) {
        width: 100%;
        overflow: auto;

    
}
`
export const Adress = styled.div`
    width: 60%;
    background-color: #F3F3F3;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    padding: 15px 30px;
    border-radius: 10px;
    gap: 100px;

    span {
        color: rgb(45, 45, 45);

        span {
            font-weight: bold;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        width: 200px;
    }
    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        overflow: auto;
        gap: 0;

    
}
`

export const NewAdress = styled.div `
    margin: auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        margin-top: 36px;
        background-color: rgb(233, 233, 233);
        height: 50px;
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

    button {
        margin-top: 50px;
        margin-bottom: 50px;
        background-color: #ea4b12;
        color: #fff;
        width: 25%;
        border-radius: 6px;
        border: none;
        padding: 10px;
    }
    h5::after {
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 80%;
        button {
            width: 70%;
        } 

        input {
            width: 100%;
        }
    
}
`

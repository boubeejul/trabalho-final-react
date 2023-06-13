import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    min-height: 37vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding-bottom: 50px;

    h4::after {
        width: 100%;
    }
`

export const PedidosContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;

    h1 {
        margin: 0%.5;
        width: 20vw;
        font-size: 3vh;
    }

    @media (max-width: 2560px) {
        width: 40%;
    }
    @media (max-width: 1440px) {
        width: 70%;
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 425px) {
        width: 90%;
    }
    
    
`

export const Pedido = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    background-color: rgb(248, 248, 248);
    border: 1px solid rgb(228, 228, 228);
    border-radius: 10px;
    padding: 15px;
    
    span {
        color: #000;
        text-align: start;

        span {
            font-weight: bold;
        }
    }

    @media (max-width: 2560px) {
        width: 75%;
    }
    @media (max-width: 425px) {
        flex-direction: column;
        gap: 5px;
    }
`
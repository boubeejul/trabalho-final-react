import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    min-height: 37vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4::after {
        width: 100%;
    }
`

export const PedidosContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
        margin: 0%.5;
        width: 20vw;
        font-size: 3vh;
    }
`

export const Pedido = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #d9d9d9;
    border-radius: 10px;
    margin: 10px;
    
`
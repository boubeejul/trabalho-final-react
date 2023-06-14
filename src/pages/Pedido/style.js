import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    min-height: 36vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PedidoContainer = styled.div`
    width: 80%;

    #voltar {
        margin: 0;
        padding: 0;
        width: 10vw;
        height: 5vh;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        background-color: white;
        font-size: small;
        color: #EA4B12;
        h4 {
            margin: 0;
            padding: 0;
            font-size: 20px;
            text-decoration: none;
            ::after {
                display: none;
            }
        }
    
    }
`

export const Produtos = styled.div`
    width: 100%;
`

export const Produto = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 20px;
    margin: 10px 0 10px 0;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    h1 {
        padding: 20px;
        font-size: 20px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    
    h1 {

    }

`


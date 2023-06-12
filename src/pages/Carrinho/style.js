import styled from "styled-components";

export const Container = styled.main`
    margin: auto;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    flex-direction: column;
`

export const Cart = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 50px;
`

export const CartProducts = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const Product = styled.div`
    width: 100%;
    background-color: #F8F8F8;
    padding: 10px;
    display: flex;
    gap: 20px;
    border: 1px solid #E4E4E4;
    text-align: start;

    span {
        color: #000;
    }

    img {
        width: 150px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    .productDelete {
        display: flex;
        justify-content: end;

        img {
            width: 25px;
            cursor: pointer;
        }
    }

    .productInfo {
        display: flex;
        justify-content: center;

        div {
            display: flex;
            flex-direction: column;
            padding-bottom: 20px;
            justify-content: center;
        }

        span {
            span {
                font-weight: bold;
            }
        }
    }
`

export const CartInfo = styled.div`
    width: 45%;
    background-color: #F8F8F8;
    border: 1px solid #E4E4E4;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px;
    align-self: baseline;

    #totalValue {
        font-size: 20px;
    }

    #total {
        font-size: 20px;
    }
    span {
        color: #000;

        span {
            font-weight: bold;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    button {
        width: 60%;
        color: #fff;
        background-color: #ea4b12;
        border: none;
        padding: 8px;
        margin: auto;
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;

        img {
            width: 20px;
        }
    }
`
import styled from "styled-components";

export const Container = styled.main`
    margin: auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    flex-direction: column;
`

export const Cart = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
    padding-bottom: 60px;
    gap: 50px;
    
    img {
        width: 100%;
    }
    @media (max-height: 1368px) {
        margin-bottom: 120px;
        padding-bottom: 120px;
    }
    @media (max-width: 767px) {
        flex-direction: column-reverse;
        width: 100%;
        align-items: center;
    }
`

export const CartProducts = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 767px) {
        width: 100%;

        
    }
`

export const Product = styled.div`
    width: 100%;
    background-color: #F8F8F8;
    padding: 10px;
    display: flex;
    gap: 20px;
    border: 1px solid #E4E4E4;
    text-align: start;
    justify-content: space-between;

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

    
    @media (max-width: 767px) {
        
        img {
            width: 50%;
        }
        
        span {
            font-size: 13px;
            span {
                font-size: 13px;
                font-weight: bold;
            }
        }
    }
    @media (max-width: 425px) {
        span {
            font-size: 12px;
            span {
                font-size: 12px;
                font-weight: bold;
            }
        }

        flex-direction: column; 
        align-items: center;
        text-align: center;

    }

    @media (max-width: 320px) {
        span {
            font-size: 12px;
            span {
                font-size: 12px;
                font-weight: bold;
            }
        }
    }
    
`

export const CartInfo = styled.div`
    width: 35%;
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
        font-size: 15px;

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

    @media (max-width: 767px) {
        width: 100%;
    }

    @media (max-width: 820px) {
        #totalValue {
            font-size: 16px;
        }

        #total {
            font-size: 16px;
        }
        span {
            color: #000;

            span {
                font-size: 15px;
            }
        }
        
    }

    @media (max-width: 1024px) {
        button {
        width: 100%;

        }
    }
`
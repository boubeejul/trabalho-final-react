import styled from 'styled-components';

export const Container = styled.header`
    width: 100vw;
    height: 130px;
    display: flex;
    background-color: rgb(0, 0, 0);
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 15%;
    padding-top: 5px;
    padding-left: 10%;

    @media (max-width: 768px) {
        justify-content: space-evenly;
        padding-left: 0;
    }
    @media (max-width: 425px) {
        justify-content: center;
        width: 100%;
        padding: 0;
        gap: 100px;
    }
`

export const Logo = styled.div`
    justify-content: space-evenly;
    img {
        width: 130px;
        cursor: pointer;
    }

    @media (max-width: 425px) {
        img {
            width: 80px;
        }
    }
    
`

export const SearchBar = styled.div`
    width: 35%;
    display: flex;
    gap: 15px;
    align-items: center;
    position: relative;

    input {
        width: 100%;
        height: 43px;
        border-radius: 13px;
        border: none;
        padding-left: 20px;
    }

    button {
        background: none;
        border: none;
    }

    img {
        width: 25px;
        cursor: pointer;
    }

    @media (max-width: 767px) {

        width: 25px;
        input {
            display: none;
        }
        img {
            
        width: 25px;
        }
    }
    @media (max-width: 540px) {
        display: none;
    }
    
`

export const Costumer = styled.div`
    width: 9%;
    display: flex;
    gap: 50px;
    align-items: center;

    img {
        width: 40px;
        cursor: pointer;
    }

    @media (max-width: 767px) {
        width: 25%;
        gap: 10px;
        img {
        margin-right: 10px ;
        width: 30px;
        }
    }
`
export const Itens = styled.div`
    position: absolute;
    top: 44px;
    width: 90%;
    max-height: 300px;
    background-color: white;
    z-index: 1;
    overflow: hidden auto;
    border-radius: 5px;
    box-shadow: rgb(100, 100, 100) 2px 2px;
    padding: 10px;

    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }


    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        a {
            text-decoration: none;
            color: black;
        }
    }
    div:hover {
        background-color: #d9d9d9;
    }

    @media (min-width: 768px) {
        width: 82%;
    }
    @media (min-width: 1024px) {
        width: 85%;
    }
    @media (min-width: 1440px) {
        width: 90%;
    }
    @media (min-width: 2560px) {
        width: 94%;
    }
`

export const Cart = styled.div`
    display: flex;

    #cartItens {
        margin-top: 20px;
        background-color: rgb(234, 75, 18);
        width: 20px;
        height: 20px;
        font-size: 14px;
        text-align: center;
        border-radius: 50%;
        color: rgb(255, 255, 255);

        #itens {
            font-size: 12px;
        }
    }
`
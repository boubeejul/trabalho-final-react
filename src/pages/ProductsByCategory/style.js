import styled from "styled-components";

export const Container = styled.main`
    width: 70%;
    margin: auto;
    padding: 20px;
`

export const Wrap = styled.div`
    width: 100%;
    display: flex;
    grid-template-columns: auto auto auto auto auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
    margin-top: 50px;

    a {
        text-decoration: none;
    }
`

export const Product = styled.div`
    background-color: #EBEBEB;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 200px;
    transition: 1s;
    img {
        width: 200px;
    }

    &:hover {
        background-color: rgb(234, 75, 18);
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    span {
        color: #252525;
        text-align: center;
    }

    span:first-of-type {
        font-weight: 600;
    }
`
export const ContainerTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 20px;
        margin-left: 5px;
    }
    button {
        background-color: rgb(234, 75, 18);
        border: none;
        margin: 5px;
        border-radius: 10px;
        padding: 5px;
    }

    button:hover {
        background-color: rgb(234, 75, 18);
        border: none;
        margin: 5px;
        border-radius: 10px;
        padding: 5px;
    }

    @media (max-width: 767px) {
        flex-direction: column;
    }
    
`
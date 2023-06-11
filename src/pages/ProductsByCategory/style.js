import styled from "styled-components";

export const Container = styled.main`
    width: 70%;
    margin: auto;
    padding: 20px;
`

export const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
    margin-top: 50px;
`

export const Product = styled.div`
    width: 200px;
    img {
        width: 200px;
    }
`

export const Info = styled.div`
    background-color: #EBEBEB;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: 1s;

    span {
        color: #252525;
        text-align: center;
    }

    span:first-of-type {
        font-weight: 600;
    }

    &:hover {
        background-color: rgb(234, 75, 18);
    }
`
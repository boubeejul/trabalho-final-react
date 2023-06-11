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
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 130px;
    display: flex;
    background-color: #000;
    justify-content: center;
    align-items: center;
    gap: 200px;
    padding-top: 5px;
`

export const Logo = styled.div`
    img {
        width: 140px;
    }
`

export const SearchBar = styled.div`
    width: 490px;
    display: flex;
    gap: 15px;
    align-items: center;

    input {
        width: 435px;
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
        width: 30px;
        cursor: pointer;
    }
`

export const Costumer = styled.div`
    width: 128px;
    display: flex;
    gap: 25px;

    img {
        width: 35px;
        cursor: pointer;
    }
`

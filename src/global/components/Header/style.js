import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 130px;
    display: flex;
    background-color: rgb(0, 0, 0);
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 10%;
    padding-top: 5px;
    padding-left: 10%;
`

export const Logo = styled.div`
    img {
        width: 130px;
        cursor: pointer;
    }
`

export const SearchBar = styled.div`
    width: 30%;
    display: flex;
    gap: 15px;
    align-items: center;

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
`

export const Costumer = styled.div`
    width: 10%px;
    display: flex;
    gap: 50px;

    img {
        width: 40px;
        cursor: pointer;
    }
`

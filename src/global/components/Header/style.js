import styled from 'styled-components';

export const Container = styled.header`
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
    justify-content: space-evenly;
    img {
        width: 130px;
        cursor: pointer;
    }

    @media (max-width: 767px) {
        img {
            width: 80px;
        }
    }
`

export const SearchBar = styled.div`
    width: 30%;
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
    
`

export const Costumer = styled.div`
    width: 10%px;
    display: flex;
    gap: 50px;

    img {
        width: 40px;
        cursor: pointer;
    }

    @media (max-width: 767px) {
        width: 40%;
        gap: 10px;
        img {
        margin-right: 10px ;
        width: 30px;
        }
    }
`
export const Itens = styled.div`
    position: absolute;
    top: 90px;
    left: 38.4%;
    min-width: 21.4%;
    max-height: 300px;
    background-color: white;
    z-index: 1;
    overflow: auto;
    overflow-x: hidden;
    border-radius: 5px;
    box-shadow: 2px 2px #646464;
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
`
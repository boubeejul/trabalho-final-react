import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    position: absolute;
    bottom: 0;
    height: 380px;
    display: flex;
    flex-direction: column;
    background-color: #000;
    justify-content: center;
    align-items: center;
`
export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100vw;
    height: 380px;
    margin: 48px;

    div {
        margin: 0px 115px 0px 115px;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 5px;
        font-weight: bold;
    }

    p {
        font-size: 18px;
        margin-top: 16px;
    }
    img {
        width: 30px;
        cursor: pointer;
        margin-right: 10px;
        margin-top: 16px;
    }
    
    a {
        text-decoration: none;
        color: #FFF;
    }

    a:hover {
        text-decoration: underline;
    }
`

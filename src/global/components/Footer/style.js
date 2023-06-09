import styled from 'styled-components';

export const h4 = styled.h4`
    color: #fff;
`

export const Container = styled.div`
    width: 100vw;
    height: 380px;
    display: flex;
    flex-direction: column;
    background-color: #000;
    justify-content: center;
    align-items: center;
    
`
export const ContainerInfo = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: space-around;
    -webkit-box-align: start;
    align-items: start;
    width: 100%;
    height: 380px;
    margin: 48px;
    padding: 0px 20px;  
    

    div {
        margin: 0px 115px 0px 115px;
    }

    h4 {
        color: #fff;
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

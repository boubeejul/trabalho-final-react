import styled from 'styled-components';

export const Container = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #000;
    justify-content: center;
    align-items: center;
    color: #fff;
    gap: 40px;

    p {
        padding-bottom: 20px;
    }
    
    h3 {
    color: #000;
    padding-bottom: 10px;
    font-weight: bolder;
    }
    h3::after {
    content: "";
    height: 2px;
    width: auto ;
    display: block;
    background-color: rgb(234, 75, 18);
    margin-top: 5px;
    }

@media (max-width: 767px) {
        
        p{
            text-align: center;
            margin: 0;
        }

    }
`
export const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 48px;
    padding: 0px 20px;
    
    h3 {
        color: #fff;
    }

    p {
        font-size: 18px;
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

    @media (max-width: 767px) {
        flex-direction: column;
        width: 90%;
        gap: 30px;
        text-align: center;
        align-items: center;

        h3:after {
            width: 100%;
        }
    }
`

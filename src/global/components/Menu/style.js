import styled from 'styled-components';

export const Container = styled.div`
    height: 46px;
    display: flex;
    background-color: #EA4B12;
    justify-content: center;
    align-items: center;
    gap: 200px;

`

export const Wrap = styled.div`
    width: 72%;
    display: flex;
    justify-content: space-between;

    .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root {
        padding: 10px 50px;
    }

    @media (max-width: 767px) {
        span {
        font-size: 10px;
        }
        img {
            width: 15%;
        }
    }
`

export const Options = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    span {
        font-size: 18px;
    }

    a {
        text-decoration: none;
    }

    @media (max-width: 767px) {
        
        span {
            font-size: 10px;
        }
    }
`
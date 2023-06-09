import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`
export const Info = styled.div`
    width: 80%;
    img {
        width: 100%;
    }
`

export const SliderContainer = styled.div`
    width: 80%;
    padding-bottom: 20px;
`

export const NextArrow = styled.button`
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;

    &:before {
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;
        opacity: .75;
        color: black;
        -webkit-font-smoothing: antialiased;
    }
`

export const BeforeArrow = styled.button`
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;

    &:before {
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;
        opacity: .75;
        color: black;
        -webkit-font-smoothing: antialiased;
    }
`

export const Publi = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 7%;
    margin-bottom: 2%;

    img {
        max-height: 100%;
    }

`


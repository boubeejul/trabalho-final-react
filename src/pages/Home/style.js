import styled from "styled-components";

export const Container = styled.div`
margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`

export const SliderContainer = styled.div`
    width: 80%;
    
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        gap: 2px;
        img {
            width: 15%;
        }
    }
`
export const Text = styled.h1`
    font-size: 40px;
    color: black;
    font-weight: bold;
`

export const Hr = styled.hr`
    border-top: 2px solid #EA4B12;
    border-radius: 1px;
    width: 30%;
`

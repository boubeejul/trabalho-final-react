import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 42.7vh;
    img {
        height: 40vh;
    }
    
`
export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    * {
        margin: 10px
    }
`

export const ImageContainer = styled.div`
    width: 40%
`

export const InfoContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    background-color: #d9d9d9;
    text-align: center;

    h2 {
        border-radius: 10px;
        padding: 0.5%;
        background-color: #d9d9d9;
        font-size: larger;
    }

    h3 {
        font-size: medium;
    }

    .quantity {
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        input {
            margin-right: 0;
            margin-left: 0;
            background-color: #4444446b;
            border: none;
            margin: 0;
            height: 100%;
            width: 50px;
            border-radius: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-weight: bold;
            font-size: 25px;
        }
        
        button {
            display: flex;
            height: 100%;
            width: 40px;
            border: none;
            background-color: #000000;
            text-align: center;
            color: white;
            align-items: center;
            justify-content: center;
            font-size: 30px;
        }        

       .minus {
            margin-right: 0;
            
            border-radius: 50% 0 0 50%;
       }

       .plus {
            margin-left: 0;
            border-radius: 0 50% 50% 0;
       }
    }

    .finally {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 200px;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            border: none;
            background-color: #EA4B12;
            border-radius: 10px;
            width: 80%;

        }

        button:hover {
            background-color: #a0340d;
        }

    }
`

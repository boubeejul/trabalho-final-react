import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
`
export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    margin: 10px;
`

export const ImageContainer = styled.div`
    width: 30%

`

export const InfoContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 70%;

    h2 {
        border-radius: 10px;
        padding: 0.5%;
        background-color: #d9d9d9;
    }

    .quantity {
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        input {
            background-color: #d9d9d9;
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
            height: 100%;
            width: 40px;
            border: none;
            background-color: #EA4B12;

            img {
                width: 30%;
            }
        }

        button:hover {
            background-color: #a0340d;
        }


       .minus {
            border-radius: 10px 0 0 10px;
       }

       .plus {
            border-radius: 0 10px 10px 0;
       }
    }

    .finally {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 130px;

        button {
            height: 100%;
            width: 50%;
            border: none;
            background-color: #EA4B12;

            img {
                width: 30%;
            }
        }

        button:hover {
            background-color: #a0340d;
        }

        .addCart {
            border-radius: 10px 0 0 10px;
            border-right: 1px solid black;
       }

       .buy {
            border-radius: 0 10px 10px 0;
       }
    }

`
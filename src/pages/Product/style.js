import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: calc(100vh - 332.594px);
    img {
        width: 230px;
    }
    
`
export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    flex-wrap: wrap;
    margin-top: 50px;
    align-items: center;

    @media (max-width: 767px) {
        width: 70%;
        
    }
`

export const ImageContainer = styled.div`
`

export const InfoContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    background-color: #F2F2F2;
    border-radius: 10px;
    text-align: center;
    gap: 20px;

    #added {
        font-weight: bolder;
    }

    span {
        color: #000000;
        font-size: 16px;

        span {
            font-weight: bold;
        }
    }

    h3 {
        font-size: medium;
    }

    h4::after {
        width: 100%;
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
            font-size: 20px;
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
        margin-top: 20px;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            border: none;
            background-color: #EA4B12;
            border-radius: 10px;
            width: 80%;
            color: #fff;
            gap: 8px;
        }

        button:hover {
            background-color: #a0340d;
        }

    }

    @media (max-width: 767px) {
        width: 100%;
    }
`
export const SliderContainer = styled.div`
    width: 80%;
    padding-bottom: 50px;
    margin-top: 100px;

    .swiper-button-next, .swiper-button-prev { 
        color: rgb(234, 75, 18); 
    }

    .swiper {
        width: 100%;
        height: 100%;
    }
  
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        width: 265px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .swiper-slide img {
        display: block;
    }

    h4::after {
        width: 320px;
    }

    
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

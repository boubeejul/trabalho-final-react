import styled from "styled-components";

export const Container = styled.main`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`
export const Info = styled.div`
    width: 80%;
    padding-bottom: 20px;

    img {
        width: 100%;
    }

    hr {
        margin: 1rem 0;
        color: #BABABA;
        border: 0;
        border-top: var(--bs-border-width) solid;
        opacity: 0.25;
        background-color: #bababa;
    }
`

export const SliderContainer = styled.div`
    width: 80%;
    padding-bottom: 50px;

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
    
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;

        //padding-left: 3.5%;
    }
    
    .swiper-slide img {
        display: block;
        width: 225px;
        object-fit: cover;
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

export const Publi = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 7%;
    margin-bottom: 2%;

    img {
        margin-top: 20px;
        width: 40%;
    }
`

export const Comments = styled.div`
    width: 100%;
    height: 140px;
    background-color: rgb(189, 189, 189);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 130px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-image: url(https://cdn.discordapp.com/attachments/1081311918301655090/1116783894021292172/peakpx.jpg);
    background-size: cover;
    @media (max-width: 768px) {
        display: none;
    }
`

export const Comment = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 300px;

    img {
        width: 78px;
        height: 78px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        color: #fff;
        font-weight: bold;
    }

    p {
        color: #fff;
        font-style: italic;
    }
    @media (max-width: 768px) {

        display: none;

    }
`


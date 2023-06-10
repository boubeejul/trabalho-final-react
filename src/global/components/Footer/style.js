import styled from 'styled-components';

export const Container = styled.footer`
    width: 100vw;
    height: 380px;
    display: flex;
    flex-direction: column;
    background-color: #000;
    justify-content: center;
    align-items: center;
    color: #fff;
    
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
    -webkit-box-pack: center;
    justify-content: space-evenly;
    -webkit-box-align: start;
    align-items: start;
    width: 100%;
    height: 380px;
    margin: 48px;
    padding: 0px 20px;  
    
    h3 {
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

    @media (max-width: 767px) {
        margin: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3{
            text-align: center;
        }
        p{
            text-align: center;
            margin: 0;
        }

        img {
            margin-top: 0;
            margin-left: 7px;
        }
    }
`

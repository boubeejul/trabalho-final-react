import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 1008px;
  background: #000000;
`;
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 546px;
  height: 465px;
  left: 447px;
  top: 267px;
  background: #f8f8f8;
  border-radius: 15px;

  input {
    margin-top: 36px;
    background-color: #e9e9e9;
    height: 44px;
    width: 362px;
    padding: 20px;
    border: none;
    border-radius: 5px;
  }

  a {
    margin-top: 45px;
    text-decoration: none;
    color: #000;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    width: 129px;
    height: 38px;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #ea4b12;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    border: none;
  }

  button:hover {
    width: 22%;
  }

  h4 {
    margin-top: 30px;
    font-size: 35px;
    text-align: center;
  }
`;

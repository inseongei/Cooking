import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import loginImage from "../asset/LoginImage.png";
export default function Login() {
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="image-container">
            <img src={loginImage} alt="사진" className="login-image" />
          </div>
          <div className="login-container">
            <div className="login-box">
              <h1>Login</h1>
              <p>☺️다양한 레시피와 활동으로 요리를 즐겁게 해보세요☺️</p>
              <div className="input-box">
                <input type="text" placeholder="아이디를 입력해주세요." />
                <input type="password" placeholder="패스워드를 입력해주세요." />
                <button>로그인</button>
              </div>
              <div className="create">계정 만들러 가기</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;
  }

  .input-box input {
    border: 1px solid rgb(229, 229, 229);
    outline: none;
    min-height: 40px;
    transition: all 0.2s ease 0s;
    width: 50%;
    padding: 0px 15px;
    border-radius: 5px;
    margin-bottom: 3px;
  }

  .input-box button {
    border: none;
    font-weight: 700;
    min-height: 44px;
    transition: all 0.2s ease 0s;
    width: 50%;
    padding: 0px 15px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #ffd700;
  }
  .input-box button:hover {
    background: #ff8e00;
  }

  .login-image {
    width: 100%;
    height: 100%;
  }

  .container {
    display: flex;
    height: 90%;
    width: 80%;
    border: 1px solid rgba(139, 149, 161, 0.1);
    border-radius: 7px;
  }

  .image-container {
    width: 50%;
  }

  .login-container {
    width: 50%;
    height: 100%;
    border: 1px solid rgba(139, 149, 161, 0.1);
  }

  .login-box {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login-box h1 {
    text-align: center;
    font-size: 2rem;
    font-family: "NPSfontBold";
    padding-top: 15px;
  }

  .login-box p {
    padding: 10px;
    text-align: center;
    font-weight: 700;
    color: #516c50;
  }

  .create {
    text-align: center;
    margin: 10px;
    cursor: pointer;
    color: #516c50;
  }

  .create:hover {
    font-weight: 700;
  }
`;

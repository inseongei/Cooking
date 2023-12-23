import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import loginimage from "../asset/loginimage.png";
import { Link } from "react-router-dom";
export default function Login() {
  const LoginRef = useRef();
  useEffect(() => {
    LoginRef.current.focus();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="image-container">
            <img src={loginimage} alt="사진" className="login-image" />
          </div>
          <div className="login-container">
            <div className="login-box">
              <h1>Login</h1>
              <p>☺️다양한 레시피와 활동으로 요리를 즐겁게 해보세요☺️</p>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요."
                  ref={LoginRef}
                />
                <input type="password" placeholder="패스워드를 입력해주세요." />
                <button>로그인</button>
              </div>
              <Link to="/SignUp">
                <div className="create">계정 만들러 가기</div>
              </Link>
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

  .input-box input:focus {
    border: 1px solid #ffd700;
  }

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
    width: 70%;
    padding: 0px 15px;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .input-box button {
    border: none;
    font-weight: 700;
    min-height: 44px;
    width: 70%;
    padding: 0px 15px;
    border-radius: 5px;
    margin-top: 10px;
    transition: all 0.3s ease 0s;
    background-color: #ffd700;
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
    height: 100%;
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
    color: #0f360e;
    opacity: 0.8;
  }

  .create:hover {
    opacity: 1;
  }

  @media screen and (max-width: 991px) {
    .container {
      flex-direction: column;
      border: none;
    }

    .login-box {
      justify-content: flex-start;
    }

    .image-container {
      display: none;
    }

    .login-container {
      width: 100%;
      height: 100%;
      border: none;
    }

    .input-box input {
      width: 75%;
    }

    .input-box button {
      width: 75%;
    }

    .input-box input:focus {
      border: 1px solid rgb(229, 229, 229);
    }

    .input-box input::placeholder {
      font-size: 0.8rem;
    }

    .login-box p {
      font-size: 0.75rem;
    }

    .create {
      font-size: 0.8rem;
    }

    .create {
      opacity: 1;
    }
  }

  @media screen and (max-width: 520px) {
    .input-box input {
      width: 100%;
    }

    .input-box input::placeholder {
      font-size: 0.9rem;
    }

    .input-box button {
      width: 100%;
    }
  }
`;

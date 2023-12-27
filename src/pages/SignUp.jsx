import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import SignUpimage from "../asset/SignUpImage.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="container">
          <div className="image-container">
            <img src={SignUpimage} alt="사진" className="Sign-image" />
          </div>
          <div className="SignUpBox">
            <div className="Sign-Box">
              <h2 className="title">SignUp</h2>
              <p className="sub-title">맛남의 공간에 오신걸 환영합니다.</p>

              <div className="input-box">
                <div className="input-title">아이디</div>
                <input
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  className="input-style"
                />
                <div className="bad-subinfo"></div>
              </div>

              <div className="input-box">
                <div className="input-title">패스워드</div>
                <input
                  type="text"
                  placeholder="패스워드을 입력해주세요."
                  className="input-style"
                />
                <div className="bad-subinfo"></div>
              </div>

              <div className="input-box">
                <div className="input-title">패스워드 확인</div>
                <input
                  type="text"
                  placeholder="패스워드을 다시 입력해주세요."
                  className="input-style"
                />
                <div className="bad-subinfo"></div>
              </div>

              <div className="input-box">
                <div className="input-title">닉네임</div>
                <input
                  type="text"
                  placeholder="닉네임을 입력해주세요."
                  className="input-style"
                />
                <div className="bad-subinfo"></div>
              </div>
              <div className="button-box">
                <button className="goBack" onClick={() => navigate(-1)}>
                  이전
                </button>
                <button className="create">생성</button>
              </div>
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

  .container {
    display: flex;
    height: 90%;
    width: 80%;
    border: 1px solid rgba(139, 149, 161, 0.1);
    border-radius: 7px;
  }

  .Sign-image {
    width: 100%;
    height: 100%;
  }

  .image-container {
    width: 50%;
  }

  .SignUpBox {
    width: 50%;
  }

  .Sign-Box {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .title {
    text-align: center;
    font-size: 2rem;
    font-family: "NPSfontBold";
    padding-top: 15px;
  }

  .sub-title {
    padding: 10px;
    text-align: center;
    font-weight: 700;
    color: #516c50;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }

  .input-title {
    width: 60%;
  }

  .input-style {
    border: 1px solid rgb(229, 229, 229);
    outline: none;
    min-height: 40px;
    transition: all 0.2s ease 0s;
    width: 60%;
    padding: 0px 15px;
    border-radius: 5px;
  }

  .input-style:focus {
    border: 1px solid #ffd700;
  }

  .bad-subinfo {
    color: red;
  }

  .good-subinfo {
    color: green;
  }

  .button-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .goBack {
    width: 30%;
    border: none;
    font-weight: 700;
    transition: all 0.2s ease 0s;
    border-radius: 5px;
    min-height: 44px;
    margin: 10px;
    background-color: rgb(229, 229, 229);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .create {
    width: 30%;
    border: none;
    font-weight: 700;
    min-height: 44px;
    transition: all 0.2s ease 0s;
    border-radius: 5px;
    margin: 10px;
    background-color: #ffd700;
  }

  @media screen and (max-width: 991px) {
    .container {
      flex-direction: column;
      align-items: center;
      border: none;
    }

    .image-container {
      display: none;
    }

    .SignUpBox {
      width: 100%;
    }

    .input-style::placeholder {
      font-size: 0.9rem;
    }

    .input-title {
      width: 60%;
    }

    .input-style {
      width: 60%;
    }
  }

  @media screen and (max-width: 520px) {
    .input-title {
      width: 90%;
    }

    .input-style {
      width: 90%;
    }

    .button-box button {
      width: 45%;
    }

    .input-style::placeholder {
      font-size: 0.85rem;
    }
  }
`;

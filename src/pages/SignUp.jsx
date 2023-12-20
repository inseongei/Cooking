import React, { useRef, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import SignUpimage from "../asset/SignUpImage.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    nicknameRef.current.focus();
  }, []);
  const nicknameRef = useRef();
  const IdRef = useRef();
  const pwRef = useRef();
  const pwcheckRef = useRef();

  const SignUpCheck = () => {
    Swal.fire({
      title: "성공",
      text: "회원가입을 완료했습니다.",
      icon: "success",
      confirmButtonText: "확인",
    }).then(() => {
      navigate("/Login");
    });
  };

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="image-container">
            <img src={SignUpimage} alt="사진" className="Sign-image" />
          </div>
          <div className="SignUpBox">
            <div className="Sign-Box">
              <h2>SignUp</h2>
              <p>맛남의 공간에 오신걸 환영합니다.</p>
              <div className="input-box">
                <div>
                  <span>닉네임</span>
                  <input
                    type="text"
                    placeholder="사용하실 이름을 입력해주세요."
                    ref={nicknameRef}
                    onChange={(e) =>
                      (nicknameRef.current.value = e.target.value)
                    }
                  />
                </div>

                <div>
                  <span>아이디</span>
                  <input
                    type="email"
                    placeholder="이메일 형식으로 입력해주세요."
                    ref={IdRef}
                  />
                </div>

                <div>
                  <span>비밀번호</span>
                  <input
                    type="password"
                    placeholder="6자 이상의 패스워드를 입력해주세요."
                    ref={pwRef}
                  />
                </div>

                <div>
                  <span>비밀번호 확인</span>
                  <input
                    type="password"
                    placeholder="패스워드를 한번 더 입력해주세요."
                    ref={pwcheckRef}
                  />
                </div>
              </div>
              <div className="btn-box">
                <Link to="/Login" className="goBack">
                  이전
                </Link>
                <button onClick={SignUpCheck}>계정생성</button>
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

  .input-box input::placeholder {
    font-size: 0.8rem;
  }

  .Sign-image {
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

  .SignUpBox {
    width: 50%;
  }
  .Sign-Box {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .Sign-Box h2 {
    text-align: center;
    font-size: 2rem;
    font-family: "NPSfontBold";
    padding-top: 15px;
  }

  .Sign-Box p {
    padding: 10px;
    text-align: center;
    font-weight: 700;
    color: #516c50;
    font-size: 1rem;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .input-box span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    width: 100px;
  }

  .input-box div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
  }

  .input-box input {
    border: 1px solid rgb(229, 229, 229);
    outline: none;
    min-height: 40px;
    transition: all 0.2s ease 0s;
    width: 50%;
    max-width: 400px;
    padding: 0px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .input-box input:focus {
    border: 1px solid #ffd700;
  }

  .btn-box button:nth-child(2) {
    background-color: #ffd700;
    border: 1px solid rgb(229, 229, 229);
  }

  .goBack {
    border: none;
    font-weight: 700;
    min-height: 44px;
    width: 30%;
    padding: 0px 15px;
    border-radius: 5px;
    margin: 10px 10px 0px 0px;
    font-size: 80%;
    background-color: rgb(229, 229, 229);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-box {
    display: flex;
    justify-content: center;
  }
  .btn-box button {
    border: none;
    font-weight: 700;
    min-height: 44px;
    width: 30%;
    padding: 0px 15px;
    border-radius: 5px;
    margin: 10px 10px 0px 0px;
    font-size: 80%;
    background-color: rgb(229, 229, 229);
  }
  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      border: none;
    }
    .image-container {
      display: none;
    }

    .SignUpBox {
      width: 100%;
    }
    .input-box input::placeholder {
      font-size: 0.75rem;
    }

    .input-box input {
      border: 1px solid rgb(229, 229, 229);
      outline: none;
      min-height: 40px;
      transition: all 0.2s ease 0s;
      width: 80%;
      padding: 0px 10px;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    .btn-box button {
      width: 50%;
    }
  }
`;

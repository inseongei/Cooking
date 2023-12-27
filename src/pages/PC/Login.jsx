import React, { useState, useRef } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function Login() {
  const [menu, setMenu] = useState(true);
  const [check, setCheck] = useState(0);
  const nicknameRef = useRef();
  const idRef = useRef();
  const pwRef = useRef();
  const pwcheckRef = useRef();
  // 회원가입 체크
  const checkSignUp = () => {
    if (
      2 > nicknameRef.current.value.length ||
      6 < nicknameRef.current.value.length
    ) {
      nicknameRef.current.focus();
      setCheck(1);
    } else if (!idRef.current.value.includes("@")) {
      idRef.current.focus();
      setCheck(2);
    } else if (pwRef.current.value.length < 6) {
      pwRef.current.focus();
      setCheck(3);
    } else if (pwRef.current.value !== pwcheckRef.current.value) {
      pwcheckRef.current.focus();
      setCheck(4);
    } else {
      setCheck(0);
      alert("회원가입 성공");
    }
  };

  return (
    <>
      <Header />
      <Container menu={menu.toString()}>
        <div className="title">맛남의 공간에 오신걸 환영합니다.</div>
        <div className="box">
          <div className="menu">
            <div className="btn login-btn" onClick={() => setMenu(true)}>
              로그인
            </div>
            <div className="btn signUp-btn" onClick={() => setMenu(false)}>
              회원가입
            </div>
          </div>
          {menu ? (
            <>
              <div className="input-box">
                <input type="text" className="login-id" placeholder="아이디" />
                <input
                  type="text"
                  className="login-pw"
                  placeholder="패스워드"
                />
              </div>
              <div className="login-box">
                <button>로그인</button>
              </div>
            </>
          ) : (
            <>
              <div className="input-box">
                <input type="text" placeholder="닉네임" ref={nicknameRef} />
                <p
                  className="info"
                  style={
                    check == 1 ? { display: "block" } : { display: "none" }
                  }
                >
                  2 ~ 6 글자 사이로 입력해주세요.
                </p>
                <input type="email" placeholder="아이디" ref={idRef} />
                <p
                  className="info"
                  style={
                    check == 2 ? { display: "block" } : { display: "none" }
                  }
                >
                  올바르지 않은 이메일 형식입니다.
                </p>
                <input type="password" placeholder="패스워드" ref={pwRef} />
                <p
                  className="info"
                  style={
                    check == 3 ? { display: "block" } : { display: "none" }
                  }
                >
                  6자 이상으로 만들어주세요.
                </p>
                <input
                  type="password"
                  placeholder="패스워드 확인"
                  ref={pwcheckRef}
                />
                <p
                  className="info"
                  style={
                    check == 4 ? { display: "block" } : { display: "none" }
                  }
                >
                  패스워드가 일치하지 않습니다.
                </p>
              </div>
              <div className="login-box">
                <button onClick={checkSignUp}>회원가입</button>
              </div>
            </>
          )}
        </div>
        {menu && <div className="Login-line">OR</div>}
        <div className="kakao">
          {menu && (
            <button>
              <RiKakaoTalkFill className="kakao-icon" /> 카카오 로그인
            </button>
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    padding: 40px;
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 100px;
  }
  .box {
    width: 30vw;
    margin: 0 auto;
    border: 1px solid #c6c6c6;
    border-radius: 10px;
  }

  .menu {
    display: flex;
  }

  .login-btn {
    border-radius: 10px 10px 0px 0px;
    border-right: 1px solid #c6c6c6;
    background-color: ${({ menu }) =>
      menu == "true" ? "#516C50" : "rgba(139, 149, 161, 0.1)"};
    color: ${({ menu }) => (menu == "true" ? "#fff" : "black ")};
  }

  .btn {
    padding: 20px;
    width: 50%;
    text-align: center;
    cursor: pointer;
  }

  .signUp-btn {
    padding: 20px;
    width: 50%;
    text-align: center;
    border-radius: ${({ menu }) =>
      menu == "true" ? "10px 0px 0px 0px;" : "10px 10px 0px 0px"};
    border-bottom: 1px solid #c6c6c6;
    background-color: ${({ menu }) =>
      menu == "true" ? "rgba(139, 149, 161, 0.1)" : "#516C50 "};
    color: ${({ menu }) => (menu == "true" ? "black" : "#fff ")};
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .input-box input {
    width: 60%;
    height: 20px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #c6c6c6;
    outline: none;
    transition: all 0.4s ease 0s;
    border-radius: 7px;
  }

  .input-box input:focus {
    border: 1px solid #516c50;
  }

  .loginbutton {
    width: 50%;
    height: 20px;
    padding: 10px;
  }

  .login-box {
    text-align: center;
    padding: 0px 10px 20px 10px;
  }

  .login-box button {
    width: 60%;
    padding: 15px;
    border: none;
    background-color: #d2e3c8;
    border-radius: 7px;
  }

  .Login-line {
    width: 30vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: ${({ menu }) => (menu == "true" ? "black" : "red ")};
  }

  .Login-line::before {
    content: "";
    display: block;
    width: 40%;
    height: 1px;
    background-color: black;
    margin-right: 10px;
  }

  .Login-line::after {
    content: "";
    display: block;
    width: 40%;
    height: 1px;
    background-color: black;
    margin-left: 10px;
  }

  .kakao {
    width: 30vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .kakao button {
    margin-top: 15px;
    width: 80%;
    height: 50px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fee500;
  }

  .kakao-icon {
    width: 30px;
    font-size: 1.3rem;
  }

  .sign-info {
    margin-top: 20px;
    border: 1px solid #c6c6c6;
    border-radius: 7px;
    display: flex;
    justify-content: center;
  }

  .info {
    display: flex;
    width: 60%;
    color: red;
  }

  .info span {
    padding: 10px;
  }

  @media screen and (max-width: 639px) {
    .title {
      font-size: 1.2rem;
      margin-top: 0px;
    }

    .box {
      width: 80vw;
    }

    .input-box input {
      width: 80%;
    }

    .login-box button {
      width: 80%;
    }

    .info {
      width: 90%;
    }

    .Login-line {
      width: 80vw;
    }

    .kakao {
      width: 80vw;
    }

    .input-box input:focus {
      border: 1px solid #c6c6c6;
    }
  }
`;

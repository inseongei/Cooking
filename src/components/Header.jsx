import React from "react";
import styled from "styled-components";
import Logo from "../asset/Logo.png";
import { BsDoorClosed } from "react-icons/bs";

export default function Header() {
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="로고" className="logo-img" />
      </div>
      <ul className="Menu-list">
        <li>레시피 광장</li>
        <li>쿠킹 클래스</li>
        <li>쿡 쇼핑</li>
      </ul>
      <div className="login-box">
        <BsDoorClosed className="login-btn" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8vh;

  .logo {
    display: flex;
    align-items: center;
    margin: 10px 0px 0px 15px;
  }

  .logo-img {
    cursor: pointer;
  }

  .Menu-list {
    display: flex;
  }

  .Menu-list li {
    padding: 15px;
    margin: 0 7px;
    border-radius: 7px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.1s ease 0s;
  }

  .Menu-list li:hover {
    background-color: rgba(139, 149, 161, 0.1);
  }

  .login-box {
    width: 200px;
    margin-right: 15px;
  }

  .login-btn {
    font-size: 2rem;
    float: right;
  }

  .login-btn:hover {
    cursor: pointer;
    color: #ffd700;
  }
`;

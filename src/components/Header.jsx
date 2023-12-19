import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../asset/Logo.png";
import { BsDoorClosed } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <Container menu={menu.toString()}>
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="로고" className="logo-img" />
        </div>
        <ul className="Menu-list">
          <li>레시피 광장</li>
          <li>쿠킹 클래스</li>
          <li>쿡 쇼핑</li>
          <li className="menu-login">로그인</li>
        </ul>
        <div className="login-box">
          <BsDoorClosed className="login-btn" />
        </div>
        <GiHamburgerMenu className="Menu-icon" onClick={() => setMenu(!menu)} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 8vh;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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

  .Menu-icon {
    display: none;
    font-size: 1.5rem;
    position: absolute;
    right: 2%;
    top: 3%;
    cursor: pointer;
  }

  .menu-login {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .header-container {
      align-items: flex-start;
      flex-direction: column;
    }
    .Menu-list {
      display: ${(props) => (props.menu === "true" ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      width: 100%;
      transition: all 0.2s ease 0s;
      z-index: 1;
      background-color: #fff;
    }

    .Menu-list li:nth-child(1) {
    }

    .Menu-list li {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid rgb(229, 229, 229);
    }

    .login-box {
      width: 100%;
      display: flex;
      justify-content: center;
      display: none;
    }

    .login-btn {
      display: ${(props) => (props.menu === "true" ? "block" : "none")};
    }

    .Menu-icon {
      display: block;
    }

    .menu-login {
      display: block;
    }

    .Menu-list li:hover {
      background-color: #fff;
    }
  }
`;

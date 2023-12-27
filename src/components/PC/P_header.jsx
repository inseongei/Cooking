import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../asset/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function P_header() {
  const [menu, setMenu] = useState(false);
  return (
    <Container>
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="사진" className="logo" />
        </Link>

        <div className="menu-box">
          <ul>
            <li>레시피 광장</li>
            <li>쿡 클래스</li>
            <li>쿡 쇼핑</li>
          </ul>
        </div>
        <Link to="/Login">
          <div className="login NoUser-login">로그인</div>
        </Link>
        <div className="login User-login" onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu className="toggle" />
          닉네임
        </div>
      </div>
      {menu && (
        <div className="menu-row">
          <div className="menu">
            <div className="menu-mypage">마이페이지</div>
            <div className="menu-logout">로그아웃</div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 80px;
  position: fixed;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgb(212, 199, 199);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    margin: 0 auto;
  }

  .logo {
    margin-right: 30px;
    cursor: pointer;
  }

  .menu-box ul {
    display: flex;
  }

  .menu-box li {
    padding: 15px;
    cursor: pointer;
    margin-left: 15px;
    white-space: nowrap;
  }

  .menu-box li:hover {
    background-color: rgba(139, 149, 161, 0.1);
    border-radius: 10px;
  }

  .menu-row {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
  }

  .menu {
    border: 1px solid rgb(212, 199, 199);
    position: absolute;
    border-radius: 10px;
    width: 140px;
    height: 100px;
    z-index: 1;
    background-color: #fff;
  }

  .login {
    border: 1px solid rgb(212, 199, 199);
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    white-space: nowrap;
  }

  .menu-mypage {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menu-mypage:hover {
    border-radius: 10px 10px 0px 0px;
    background-color: rgba(139, 149, 161, 0.1);
  }

  .menu-logout {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menu-logout:hover {
    border-radius: 0px 0px 10px 10px;
    background-color: rgba(139, 149, 161, 0.1);
  }

  .NoUser-login {
    /* display: none; */
    display: flex;
  }

  .login:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
  }

  .User-login {
    display: none;
    /* display: flex; */
    align-items: center;
  }

  .toggle {
    font-size: 1.3rem;
    margin-right: 10px;
  }
`;

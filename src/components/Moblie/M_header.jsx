import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../asset/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

export default function M_header() {
  const [menu, setMenu] = useState(false);
  return (
    <Container>
      <div className="header">
        <img src={Logo} alt="로고" className="Logo" />
        <RxHamburgerMenu
          className="Menubar"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </div>

      <ul className={menu ? "showmenu-list" : "menu-list"}>
        <div className="profile">
          <div className="name">닉네임님 환영합니다.</div>
          <div className="sub-menu">
            <div className="mypage">마이페이지</div>
            <div className="logout">로그아웃</div>
          </div>
        </div>
        <li>레시피 광장</li>
        <li>쿡 클래스</li>
        <li>쿡 쇼핑</li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  .header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Logo {
    margin-left: 7px;
    width: 150px;
  }

  .Menubar {
    width: 50px;
    height: 30px;
    color: gray;
    cursor: pointer;
  }

  .menu-list {
    width: 100%;
    position: absolute;
    z-index: 1;
    background-color: #fff;
    overflow: hidden;
    max-height: 0;
    transition: all 0.3s ease;
  }

  .showmenu-list {
    width: 100%;
    position: absolute;
    z-index: 1;
    background-color: #fff;
    max-height: 263px;
    transition: all 0.3s ease;
    overflow: hidden;
    border-bottom: 1px solid rgba(139, 149, 161, 0.1);
  }

  .menu-list li {
    padding: 15px;
    text-align: center;
  }

  .showmenu-list li {
    padding: 15px;
    border-top: 1px solid rgba(139, 149, 161, 0.1);
    text-align: center;
  }

  .profile {
    height: 120px;
  }

  .name {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(139, 149, 161, 0.1);
  }

  .sub-menu {
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mypage {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(139, 149, 161, 0.1);
  }

  .logout {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

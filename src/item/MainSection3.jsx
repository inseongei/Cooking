import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";

export default function MainSection3() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // 원하는 스크롤 위치에 따라 isVisible 상태 업데이트
    if (scrollY > 1350) {
      setScroll(true);
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 마운트된 후, 스크롤 위치에 따라 초기 scroll 설정
    handleScroll();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container scroll={scroll.toString()}>
      <div className="title-box">
        <h1>쿡 쇼핑</h1>
        <h2>당신의 주방을 더 특별하게</h2>
        <h3>만들어줄 도구를 찾아보세요</h3>
      </div>

      <div className="box-container">
        <div className="box">
          <div className="items">
            <FcPaid className="icon" />
            무료나눔
          </div>
          <div className="info">
            쓰지 않는 물건들을 사람들과 무료로 나눔해보세요.
          </div>
        </div>
        <div className="box">
          <div className="items">
            <FcRefresh className="icon" />
            교환신청
          </div>
          <div className="info">
            내가 필요없는 물건 , 내가 필요한 물건을 서로서로 교환해보세요.
          </div>
        </div>
      </div>
      <div className="second-box">
        <div className="box">
          <div className="items">
            <FcCheckmark className="icon" />
            중고거래
          </div>
          <div className="info">
            구매하기엔 아깝고 버리기엔 상태가 좋은 물건들을 판매하고
            구매해보세요.
          </div>
        </div>
        <div className="box">
          <div className="items">
            <FcAssistant className="icon" />
            1:1채팅
          </div>
          <div className="info">
            다양한 서비스는 더 나은 소통으로 시작됩니다. 1:1 채팅으로 편리하게
            거래하세요!
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding-bottom: 50px;
  .title-box {
    padding: 100px 50px 50px 200px;
  }

  .box-container {
    display: flex;
    justify-content: center;
  }

  .box {
    width: 300px;
    height: 200px;
    font-size: 2rem;
    margin: 40px;
    transition: all 3s ease 0s;
    animation: ${({ scroll }) =>
      scroll === "true" ? "op-ani 3s ease-in-out" : ""};
  }

  .second-box {
    display: flex;
    justify-content: center;
  }

  .items {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .info {
    font-size: 1.3rem;
    line-height: 1.5;
    color: gray;
  }

  .icon {
    font-size: 3rem;
    margin-right: 10px;
  }

  .title-box h1 {
    font-size: 3rem;
    color: #516c50;
    line-height: 1.5;
  }

  .title-box h2 {
    font-size: 2rem;
    line-height: 1.5;
  }

  .title-box h3 {
    font-size: 2rem;
    line-height: 1.5;
  }

  @keyframes op-ani {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 639px) {
    height: 100vh;

    .title-box {
      padding: 20px;
    }

    .box {
      font-size: 1.5rem;
      margin: 20px;
    }

    .items {
      margin-bottom: 15px;
    }

    .info {
      font-size: 1.25rem;
      line-height: 1.5;
    }

    .icon {
      font-size: 2rem;
      margin-right: 10px;
    }

    .title-box h1 {
      font-size: 2.5rem;
    }

    .title-box h2 {
      font-size: 1.5rem;
      line-height: 1.5;
    }

    .title-box h3 {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
`;

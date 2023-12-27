import styled from "styled-components";
import cooking from "../asset/cookclass.png";
import main from "../asset/main2.png";
import React, { useEffect, useState } from "react";

export default function MainSection2() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // 원하는 스크롤 위치에 따라 isVisible 상태 업데이트
    if (scrollY > 300) {
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
      <div className="box">
        <div className="title">
          <div className="title-ani">
            <h1>소통하며 요리하는</h1>
            <h2>쿡 클래스</h2>
            <h3>새로운 요리 스토리를 시작해보세요.</h3>
          </div>
          <img src={cooking} alt="요리" className="cook-image" />
        </div>
        <div className="sub-title">
          <img src={main} alt="사람들" className="people" />
          <div className="sub-title-ani">
            <h1>편하게 소통하고</h1>
            <h2>즐겁게 요리해보세요.</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: center;

  .box {
    width: 70%;
    display: flex;
  }
  .title {
    width: 50%;
    padding: 150px 0px 100px 0px;
  }

  .title-ani {
    transition: all 3s ease 0s;
    animation: ${({ scroll }) =>
      scroll === "true" ? "op-ani 2.5s ease-in-out" : ""};
  }

  .sub-title-ani {
    transition: all 2.5s ease 0s;
    animation: ${({ scroll }) =>
      scroll === "true" ? "op-ani 2.5s ease-in-out" : ""};
  }

  .title h1 {
    font-size: 2rem;
    font-weight: 700;
    padding: 20px;
    transition: all 3s ease 0s;
    opacity: ${({ scroll }) => (scroll === "true" ? "1" : "0")};
  }

  .title h2 {
    font-size: 2rem;
    padding: 0 20px;
    font-weight: 700;
    transition: all 3s ease 0s;
    opacity: ${({ scroll }) => (scroll === "true" ? "1" : "0")};
  }
  .title h3 {
    font-size: 1rem;
    padding: 20px;
    font-weight: 700;
    transition: all 3s ease 0s;
    opacity: ${({ scroll }) => (scroll === "true" ? "1" : "0")};
  }

  .sub-title {
    width: 50%;
    text-align: center;
  }

  .sub-title h1 {
    font-size: 2rem;
    font-weight: 700;
    transition: all 3s ease 0s;
    opacity: ${({ scroll }) => (scroll === "true" ? "1" : "0")};
  }

  .sub-title h2 {
    font-size: 1.5rem;
    padding: 20px;
    transition: all 3s ease 0s;
    opacity: ${({ scroll }) => (scroll === "true" ? "1" : "0")};
  }

  .people {
    width: 100%;
  }

  .cook-image {
    width: 70%;
  }

  @media screen and (max-width: 639px) {
    .box {
      width: 100%;
    }

    .title h1 {
      font-size: 1.1rem;
    }

    .title h2 {
      font-size: 1.5rem;
    }
    .title h3 {
      font-size: 1.1rem;
      line-height: 1.5;
      font-weight: 400;
    }

    .sub-title {
      width: 50%;
      padding: 150px 0px 100px 0px;
    }

    .sub-title h1 {
      font-size: 1.5rem;
    }

    .sub-title h2 {
      font-size: 1.5rem;
    }

    .cook-image {
      width: 100%;
    }
  }
`;

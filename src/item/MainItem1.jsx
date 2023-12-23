import React from "react";
import styled from "styled-components";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// image
import Logo from "../asset/main-icon.png";

export default function MainItem1() {
  return (
    <Container>
      <div className="padding-box">
        <div className="wrapper">
          <h1 className="w-title">
            쉬운 레시피에서부터 대왕급 요리까지! <br />
            요리의 모든 비밀을 여기에서 찾아보세요.
          </h1>
          <div className="sub-title">
            맛남의 공간에서 레시피를 공유해보세요 ✏️
          </div>
        </div>
        <div className="image-box">
          <img src={Logo} alt="로고" className="logo-image" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  :hover {
    .logo-image {
      transform: translateX(150%);
    }
  }
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: rgb(237, 250, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .wrapper {
    width: 50%;
    padding: 20px;
  }

  .padding-box {
    width: 80%;
    display: flex;
  }

  .w-title {
    font-family: "BMJUA";
    font-size: 1.7rem;
  }

  .image-box {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo-image {
    width: 30%;
    transition: transform 1.5s ease;
  }

  .sub-title {
    font-size: 1.3rem;
    font-family: "BMJUA";
    margin-top: 40px;
  }

  @media screen and (max-width: 991px) {
    .w-title {
      font-size: 1.3rem;
    }

    .sub-title {
      font-size: 1rem;
    }

    .image-box {
      display: none;
    }

    .logo-image {
      width: 20%;
    }

    .padding-box {
      flex-direction: column;
      align-items: center;
    }

    .wrapper {
      width: 100%;
      text-align: center;
    }

    @media screen and (max-width: 520px) {
      .w-title {
        font-size: 0.9rem;
      }

      .sub-title {
        display: none;
      }
    }
  }
`;

import React from "react";
import styled from "styled-components";
import main1 from "../asset/main1.png";
import mobile from "../asset/mobile1.png";
import { FaArrowRight } from "react-icons/fa";
import "animate.css";
export default function MainSection1() {
  return (
    <Container>
      <div className="box">
        <h1 className="title">우리만의 맛을 전하는 공간</h1>
        <h2 className="sub-title">요리의 마법을 나눠보세요.</h2>
        <div className="cook">
          <button className="cook-btn">
            레시피 보러가기
            <FaArrowRight className="icon" />
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  margin: auto;
  background-image: url(${main1});
  background-size: cover;
  background-position: center;

  .box {
    padding-top: 50px;
  }

  .title {
    font-size: 3rem;
    padding: 50px 30px 30px 30px;
    font-weight: 700;
    text-align: center;
    transition: all 3s ease 0s;
    animation: 3s ease-in-out ani-opa;
  }

  .sub-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    transition: all 2s ease 0s;
    animation: 2s ease-in-out ani-opa;
  }

  .main-image {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .cook {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  .cook-btn {
    padding: 15px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    background-color: #ffd700;
  }

  .cook-btn:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
  }

  .icon {
    margin-left: 3px;
  }

  @keyframes ani-opa {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 639px) {
    height: 92vh;
    padding: 0px;
    background-image: url(${mobile});

    .box {
      padding-top: 0px;
    }

    .title {
      font-size: 1.5rem;
    }

    .sub-title {
      font-size: 1.2rem;
    }

    .cook-btn:hover {
      box-shadow: 0;
    }
  }
`;

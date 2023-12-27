import React from "react";
import styled from "styled-components";
import Logo from "../asset/Logo2.png";
import cook from "../asset/cooking.png";

export default function MainItem2() {
  return (
    <Container>
      <div className="wrapper">
        <div className="text-box">
          <h1 className="title">
            거리를 뛰어넘는 맛, 함께하는 즐거움! <br />
            요리 교실, 여기서 시작하세요.
          </h1>
          <div className="windows">
            <hr />
            <div className="windows-hand"></div>
            <div className="windows-hand2"></div>
            <img src={Logo} alt="로고2" />
          </div>
        </div>
        <div className="image-box">
          <img src={cook} alt="선물" className="gift" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  :hover {
    .windows img {
      opacity: 1;
    }

    .windows-hand {
      opacity: 0;
    }

    .windows-hand2 {
      opacity: 0;
    }

    .windows hr {
      opacity: 0;
    }
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #fde5d2;
  cursor: pointer;

  .wrapper {
    width: 80%;
    padding: 30px;
    display: flex;
  }

  .gift {
    width: 100%;
    height: 100%;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
  }

  .windows {
    height: 75%;
    width: 75%;
    background-color: #fff;
    border-radius: 50% 50% 0px 0px;
    border: 2px solid rgb(229, 229, 229);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
  }

  .windows hr {
    position: absolute;
    height: 100%;

    background-color: rgb(229, 229, 229);
    transition: 1s ease-out;
  }

  .windows-hand {
    width: 20px;
    height: 20px;
    background-image: linear-gradient(135deg, #5b003e 0%, #005d60 100%);
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 55%;
    transition: 1s ease-out;
  }

  .windows-hand2 {
    width: 20px;
    height: 20px;
    background-image: linear-gradient(135deg, #5b003e 0%, #005d60 100%);
    border-radius: 100%;
    position: absolute;
    top: 50%;
    right: 55%;
    transition: 1s ease-out;
  }

  .windows img {
    width: 80%;
    height: 80%;
    opacity: 0;
    transition: 1s ease-out;
  }

  .title {
    font-family: "BMJUA";
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .image-box {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 991px) {
    .windows {
      display: none;
    }

    .title {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 520px) {
    .image-box {
      display: none;
    }

    .title {
      font-size: 1rem;
    }

    .wrapper {
      flex-direction: column;
      justify-content: center;
    }

    .text-box {
      width: 100%;
      text-align: center;
      padding: 0px;
      white-space: nowrap;
    }
  }
`;
